import React from 'react'
import styled from 'styled-components'
import { useImzoDialog } from 'containers/EImzoDialog'

const Container = styled.div`
  margin: 0 auto;
  max-width: 540px;
`

export default function EImzo () {
  const imzo = useImzoDialog()

  return (
    <Container>
      <button onClick={() => {
        imzo({
          text: 'adasdasd',
          onSuccess: (...args) => {
            return args
          }
        })
      }}>imzo</button>
    </Container>
  )
}
