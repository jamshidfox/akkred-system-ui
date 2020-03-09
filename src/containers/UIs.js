import React from 'react'
import styled from 'styled-components'
import { GiantButton, LargeButton, MediumButton, SmallButton, TinyButton, IconButton } from '../components/UI/Buttons'
import { IconInput, Input } from '../components/UI/Input'
import Checkbox from '../components/UI/Checkbox'
import { RadioButton } from '../components/UI/RadioButton'
import Close from '../icons/Close'
import Select from '../components/UI/Select'
import MultiSelect from '../components/UI/MultiSelect'

const Wrapper = styled.div`
  padding: 20px;
`

const Block = styled.div`
  &:not(:last-child) {
    border-bottom: ${props => props.theme.border};
    padding-bottom: 30px;
    margin-bottom: 30px;
  }
`

const options = [
  { value: 'cherry', label: 'Cherry' },
  { value: 'banana', label: 'Banana' },
  { value: 'apple', label: 'Apple' }
]

const nestedOptions = [
  {
    value: 'fruits',
    label: 'Fruits',
    child: [
      { value: 'cherry', label: 'Cherry' },
      { value: 'banana', label: 'Banana' },
      { value: 'apple', label: 'Apple' }
    ]
  },
  {
    value: 'vegetables',
    label: 'Vegetables',
    child: [
      { value: 'onion', label: 'Onion' },
      { value: 'potato', label: 'Potato' },
      { value: 'tomato', label: 'Tomato' },
    ]
  }
]

const numbers = [
  { id: 1, name: 'One' }
]

const UIs = props => {
  return (
    <Wrapper>
      <Block>
        <GiantButton>Button</GiantButton>
        <LargeButton>Button</LargeButton>
        <MediumButton>Button</MediumButton>
        <SmallButton>Button</SmallButton>
        <TinyButton>Button</TinyButton>
      </Block>
      <Block>
        <IconButton icon={Close} />
        <IconButton size={'giant'} icon={Close} />
        <IconButton size={'large'} icon={Close} />
        <IconButton size={'small'} icon={Close} />
      </Block>
      <Block>
        <Input placeholder={'placeholder'} label={'Hello'} />
      </Block>
      <Block>
        <IconInput placeholder={'placeholder'} label={'Hello'} icon={Close} />
      </Block>
      <Block>
        <Checkbox label={'Checkbox'} indeterminate={true} />
        <Checkbox label={'Checkbox'} />
        <RadioButton label={'Radio'} value={'radio'} />
      </Block>
      <Block>
        <Select label={'Label'} options={options} />
      </Block>
      <Block>
        <MultiSelect
          label={'Checkbox Multi Select'}
          options={options}
        />
      </Block>
      <Block>
        <MultiSelect
          label={'Nested Checkbox Multi Select'}
          options={nestedOptions}
          isNested={true}
        />
      </Block>
    </Wrapper>
  )
}

export default UIs
