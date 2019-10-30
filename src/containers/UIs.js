import React from 'react'
import styled from 'styled-components'
import { GiantButton, LargeButton, MediumButton, SmallButton, TinyButton, IconButton } from '../components/UI/Buttons'
import { IconInput, Input } from '../components/UI/Input'
import Checkbox from '../components/UI/Checkbox'
import { RadioButton } from '../components/UI/RadioButton'
import Close from '../icons/Close'
import Select from '../components/UI/Select'
import SideMenu from '../components/SideMenu'

const Wrapper = styled.div`
  padding: 20px;
`

const options = [
  { value: 'cherry', label: 'Cherry' },
  { value: 'banana', label: 'Banana' },
  { value: 'apple', label: 'Apple' }
]
const UIs = props => {
  return (
    <Wrapper>
      <GiantButton>Button</GiantButton>
      <LargeButton>Button</LargeButton>
      <MediumButton>Button</MediumButton>
      <SmallButton>Button</SmallButton>
      <TinyButton>Button</TinyButton>
      <IconButton icon={Close} />
      <IconButton size={'giant'} icon={Close} />
      <IconButton size={'large'} icon={Close} />
      <IconButton size={'small'} icon={Close} />
      <Input placeholder={'placeholder'} label={'Hello'} />
      <IconInput placeholder={'placeholder'} label={'Hello'} icon={Close} />
      <Checkbox label={'Checkbox'} indeterminate={true} />
      <Checkbox label={'Checkbox'} />
      <RadioButton label={'Checkbox'} />

      <Select label={'Label'} options={options} />
      <SideMenu />
    </Wrapper>
  )
}

export default UIs
