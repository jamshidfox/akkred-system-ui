import React from 'react'
import Container from '../../../../components/StyledElems/Container'
import Tabs from '../../../../components/TabsDetail/Tabs'
import Tab from '../../../../components/TabsDetail/Tab'

// Component
const ApplicationItem = props => {
  // const {
  // applicationItem
  // } = props

  // Data
  // const applicationItemData = prop('data', applicationItem)

  // Tabs
  const tabs =
    <Tabs
      initialValue={'one'}
    >
      <Tab value={'one'} label={'Yuridik shaxs to’g’risida ma’lumot'}>
        Tab 1
      </Tab>
      <Tab value={'two'} label={'Rahbariyat rezolyutsiyasi'}>
        Tab 2
      </Tab>
      <Tab value={'three'} label={'Ijrochi va ekspertlar'}>
        Tab 3
      </Tab>
      <Tab value={'four'} label={'Shartnomalar va to’lov ma’lumotlari'}>
        Tab 4
      </Tab>
      <Tab value={'five'} label={'EKSPERTIZA natijalari'}>
        Tab 5
      </Tab>
      <Tab value={'six'} label={'Arizachiga jo’natilgan hujjatlar'}>
        Tab 6
      </Tab>
      <Tab value={'seven'} label={'Arizachidan kelgan qo’shimcha hujjatlar'}>
        Tab 7
      </Tab>
      <Tab value={'eight'} label={'Markazga tegishli hujjatlar'}>
        Tab 8
      </Tab>
      <Tab value={'nine'} label={'Akrreditatsiyadan keyingi hujjatlar (guvohnoma, akkreditasiya doirasi)'}>
        Tab 9
      </Tab>
      <Tab value={'ten'} label={'Akrreditatsiyadan keyingi hujjatlar (guvohnoma, akkreditasiya doirasi)'}>
        Tab 10
      </Tab>
      <Tab value={'eleven'} label={'Akrreditatsiyadan keyingi hujjatlar (guvohnoma, akkreditasiya doirasi)'}>
        Tab 11
      </Tab>
    </Tabs>

  // Render
  return (
    <Container>
      {tabs}
    </Container>
  )
}

export default ApplicationItem
