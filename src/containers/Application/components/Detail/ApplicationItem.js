import React from 'react'
import { prop } from 'ramda'
import Container from '../../../../components/StyledElems/Container'
import Tabs from '../../../../components/TabsDetail/Tabs'
import Tab from '../../../../components/TabsDetail/Tab'

// Component
const ApplicationItem = props => {
  const {
    applicationItem
  } = props

  // Data
  const applicationItemData = prop('data', applicationItem)
  console.warn(applicationItem, 'applicationItem')

  // Render
  return (
    <Container>
      <Tabs
        initialValue={'one'}
      >
        <Tab value={'one'} label={'One'}>
          Tab 1
        </Tab>
        <Tab value={'two'} label={'Two'}>
          Tab 2
        </Tab>
        <Tab value={'three'} label={'Three'}>
          Tab 3
        </Tab>
        <Tab value={'four'} label={'Four'}>
          Tab 4
        </Tab>
        <Tab value={'five'} label={'Five'}>
          Tab 5
        </Tab>
        <Tab value={'six'} label={'Six'}>
          Tab 6
        </Tab>
        <Tab value={'seven'} label={'Seven'}>
          Tab 7
        </Tab>
        <Tab value={'eight'} label={'Eight'}>
          Tab 8
        </Tab>
      </Tabs>
    </Container>
  )
}

export default ApplicationItem
