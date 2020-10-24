import React, { useState } from 'react'
import styled from 'styled-components'
import DocumentImg from 'images/document-image.jpg'
import Loader from 'components/Loader'
import TaskItem from 'containers/Application/components/Items/TaskItem'
import { Text } from 'components/Text/Text'
import { TextStatus } from 'components/Text/TextStatus'
import Perms from 'components/Perms'

// Styles
const Wrap = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  padding-top: 30px;
`
const LeftSide = styled('div')`
  width: calc(100% - 100px);
  padding-right: 25px;
  border-right: 1px solid #e1e2ea;
`
const RightSide = styled('div')`
  width: calc(100% + 100px);
  padding-left: 25px;
`
const ImgWrap = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 150px;
  & > img {
    width: 100%;
    max-width: 100%;
    box-shadow: 0 2px 15px rgba(211, 216, 224, 0.25);
  }
  & > div{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
const Title = styled('h3')`
  font-size: 17px;
  line-height: 17px;
  margin-bottom: 28px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.primary};
`
const TasksWrap = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(211, 216, 224, 0.25);
`

// Component
const ApplicationItemTabOne = () => {
  // useState
  const [loadingImg, setLoadingImg] = useState(true)

  // LeftSide
  const leftSide =
    <LeftSide>
      <ImgWrap>
        {loadingImg && <Loader />}
        <img onLoad={() => setLoadingImg(false)} src={DocumentImg} alt={'Document'} />
      </ImgWrap>
    </LeftSide>

  // RightSide
  const rightSide =
    <RightSide>
      <Title>Задача</Title>
      <TasksWrap>
        <TaskItem
          it={'Приоритетная задача'}
          is={<Text fontWeight={700} color={'black'}>Нет</Text>}
        />
        <TaskItem
          it={'Статус'}
          is={<TextStatus bold={true} status={'active'}>Действующий</TextStatus>}
        />
        <TaskItem
          it={'Дата аккредитации '}
          is={<Text color={'black'}>02/08/2020</Text>}
        />
        <TaskItem
          it={'Отправитель'}
          is={<Text color={'#36434e'}>П.К.Ахмедов</Text>}
        />
        <TaskItem
          it={'Сложность задачи'}
          is={<Text fontWeight={700} color={'black'}>Обычный</Text>}
        />
        <TaskItem
          it={'Срок задачи'}
        />
        <TaskItem
          it={'Юрист'}
          is={<Text fontWeight={700} color={'primary'}>Отправить юристу</Text>}
        />
        <TaskItem
          it={'Срок задачи'}
          is={<Text color={'red'}>02/08/2020</Text>}
        />
        <TaskItem
          it={'Описание'}
          withoutIs={true}
          description={
            'В мире существуют уникальные силы, прозванные Эвол. Но обладать ими не многим повезло. ' +
            'Эволверам приходится бороться с агрессией окружающего мира.'
          }
        />
      </TasksWrap>
    </RightSide>

  // Render
  return (
    <Wrap>
      {leftSide}
      {rightSide}
    </Wrap>
  )
}

export default ApplicationItemTabOne
