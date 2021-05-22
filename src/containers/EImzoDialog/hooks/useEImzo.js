/* eslint-disable max-len */
import { useEffect, useState } from 'react'
import './scripts/e-imzo-client'

const EIMZO_MAJOR = 3
const EIMZO_MINOR = 37

const errorCAPIWS = 'Ошибка соединения с E-IMZO. Возможно у вас не установлен модуль E-IMZO или Браузер E-IMZO.'
const errorBrowserWS = 'Браузер не поддерживает технологию WebSocket. Установите последнюю версию браузера.'
const errorUpdateApp = 'ВНИМАНИЕ !!! Установите новую версию приложения E-IMZO или Браузера E-IMZO.'
const errorWrongPassword = 'Пароль неверный.'

export default function useEImzo (params) {
  const { formRef, text, onSuccess: onSuccessSign } = params

  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [key, setKey] = useState(null)
  const [keyTIN, setKeyTIN] = useState(null)

  const EIMZOClient = window.EIMZOClient || {}

  function AppLoad () {
    EIMZOClient.API_KEYS = [
      'localhost', '96D0C1491615C82B9A54D9989779DF825B690748224C2B04F500F370D51827CE2644D8D4A82C18184D73AB8530BB8ED537269603F61DB0D03D2104ABF789970B',
      '127.0.0.1', 'A7BCFA5D490B351BE0754130DF03A068F855DB4333D43921125B9CF2670EF6A40370C646B90401955E1F7BC9CDBF59CE0B2C5467D820BE189C845D0B79CFC96F',
      'null', 'E0A205EC4E7B78BBB56AFF83A733A1BB9FD39D562E67978CC5E7D73B0951DB1954595A20672A63332535E13CC6EC1E1FC8857BB09E0855D7E76E411B6FA16E9D',
      'dls.yt.uz', 'EDC1D4AB5B02066FB3FEB9382DE6A7F8CBD095E46474B07568BC44C8DAE27B3893E75B79280EA82A38AD42D10EA0D600E6CE7E89D1629221E4363E2D78650516',
      'member.478.uz', 'F2452154F7A06B8C3B78946420FC3D36E01C41CF681CB746E48F82148C12A53CE48C7DB27CDF2898BF96C6B01B66FDD2C4FD162B586F784F62F057444D7DE7E6',
      'my.akkred.uz', '5D5A5476974D1201F7D9F01E13B931E74B8B65A1BBDE08F5AFAE6EF964977B8F497C4BDF8474AE61C96DAF2A3B1C8238B5A58A4ED61A0FE669E3A1D67BC3E874',

    ]
    uiLoading()

    function onSuccessInstall () {
      uiLoadKeys()
    }

    function onFailInstall (e, r) {
      if (r) {
        uiShowMessage(r)
      } else {
        wsError(e)
      }
    }

    function onSuccess (major, minor) {
      const newVersion = EIMZO_MAJOR * 100 + EIMZO_MINOR
      const installedVersion = parseInt(major) * 100 + parseInt(minor)
      if (installedVersion < newVersion) {
        uiUpdateApp()
      } else {
        EIMZOClient.installApiKeys(onSuccessInstall, onFailInstall)
      }
    }

    function onFail (e, r) {
      if (r) {
        uiShowMessage(r)
      } else {
        uiNotLoaded(e)
      }
    }

    EIMZOClient.checkVersion(onSuccess, onFail)
  }

  function uiShowMessage (message) {
    alert(message)
  }

  function uiLoading () {
    setIsLoading(true)
  }

  function uiNotLoaded (e) {
    setIsLoading(false)
    if (e) {
      wsError(e)
    } else {
      uiShowMessage(errorBrowserWS)
    }
  }

  function uiUpdateApp () {
    setErrorMessage(errorUpdateApp)
  }

  function uiLoadKeys () {
    uiClearCombo()

    function itemIdGen (o, i) {
      return 'itm-' + o.serialNumber + '-' + i
    }

    function itemUiGen (itemId, v) {
      return uiCreateItem(itemId, v)
    }

    function onSuccess (items, firstId) {
      uiFillCombo(items)
      uiLoaded()
      uiComboSelect(firstId)
    }

    function onFail (e, r) {
      uiShowMessage(errorCAPIWS)
    }

    EIMZOClient.listAllUserKeys(itemIdGen, itemUiGen, onSuccess, onFail)
  }

  function setOptionTIN (element) {
    if (element) {
      const elementData = JSON.parse(element.getAttribute('vo'))
      setKeyTIN(elementData.TIN)
    }
  }

  function uiComboSelect (itm) {
    if (itm) {
      const id = document.getElementById(itm)
      setOptionTIN(id)
      id.setAttribute('selected', 'true')
    }
  }

  function onChangeSelect (event) {
    const selectedEl = document.getElementById(event.target.value)
    setOptionTIN(selectedEl)
    setKey(null)
  }

  function uiClearCombo () {
    if (formRef.current) {
      const combo = formRef.current.key
      combo.length = 0
    }
  }

  function uiFillCombo (items) {
    if (formRef.current) {
      const combo = formRef.current.key
      for (const itm in items) {
        combo.append(items[itm])
      }
    }
  }

  function uiLoaded () {
    setIsLoading(false)
  }

  function uiCreateItem (itmKey, vo) {
    const now = new Date()
    const dates = window.EIMZODates

    vo.expired = dates.compare(now, vo.validTo) > 0
    const itm = document.createElement('option')
    itm.value = itmKey
    itm.text = vo.CN

    if (vo.expired) {
      itm.style.color = 'gray'
      itm.text = itm.text + ' (срок истек)'
    }

    itm.setAttribute('vo', JSON.stringify(vo))
    itm.setAttribute('id', itmKey)
    return itm
  }

  function wsError (e) {
    if (e) {
      uiShowMessage(errorCAPIWS + ' : ' + e)
    } else {
      uiShowMessage(errorBrowserWS)
    }
  }

  function createPkcs7Key (key, data) {
    EIMZOClient.createPkcs7(key, data, null, function (pkcs7) {
      if (typeof onSuccessSign === 'function') {
        onSuccessSign(pkcs7, keyTIN)
      }
      // setFinalKey(pkcs7)
    }, function (e, r) {
      if (r) {
        if (r.indexOf('BadPaddingException') !== -1) {
          uiShowMessage(errorWrongPassword)
        } else {
          uiShowMessage(r)
        }
      } else {
        setKey(null)
        uiShowMessage(errorBrowserWS)
      }
      if (e) wsError(e)
    })
  }

  function onSign () {
    const form = formRef.current
    const itm = form ? formRef.current.key.value : null
    if (itm) {
      const id = document.getElementById(itm)
      const vo = id ? JSON.parse(id.getAttribute('vo')) : {}
      const data = text

      if (key) {
        createPkcs7Key(key, data)
      } else {
        EIMZOClient.loadKey(vo, function (id) {
          setKey(id)
          createPkcs7Key(id, data)
        }, function (e, r) {
          if (r) {
            if (r.indexOf('BadPaddingException') !== -1) {
              uiShowMessage(errorWrongPassword)
            } else {
              uiShowMessage(r)
            }
          } else {
            uiShowMessage(errorBrowserWS)
          }
          if (e) wsError(e)
        })
      }
    }
  }

  useEffect(() => {
    AppLoad()
  }, [])

  return {
    isLoading,
    errorMessage,
    onChangeSelect,
    onSign,
    key
  }
}
