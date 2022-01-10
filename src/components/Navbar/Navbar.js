import React from 'react'
import styled from 'styled-components'
import { Col, Badge } from 'reactstrap'
import Avatar from 'react-avatar'
import AvatarImg from '../../images/nasseer.jpg'
import { Bell } from 'react-feather'

const AvatarContainer = styled('div')`
  position: flex;
  margin-right: 2rem;

  background: url(_59828430_59828429.jpg);
  border-radius: 46px;
  & :hover {
    cursor: pointer;
  }
`

const FullNameContainer = styled('div')`
  position: flex;
  margin-right: 1rem;
  margin-top: 0.7rem;
  font-family: Gotham Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 14px;

  color: #7d8893;

  & :hover {
    cursor: pointer;
  }
`

const NotificationContainer = styled('div')`
  display: flex;
  margin-right: 1rem;
  margin-top: 0.3rem;
  & :hover {
    cursor: pointer;
  }
`

const Navbar = () => {
  return (
    <div>
      <Col sm="12" className="d-flex justify-content-end">
        <NotificationContainer className="">
          <Bell size={25} />
          <span>
            <Badge className="bg-warning">5</Badge>
          </span>
        </NotificationContainer>
        <FullNameContainer className="">Naseer Abdul Rahim</FullNameContainer>
        <AvatarContainer>
          <Avatar style={{ objectFit: 'cover' }} src={AvatarImg} size={35} round={true} />
        </AvatarContainer>
      </Col>
    </div>
  )
}
export default Navbar
