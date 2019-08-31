import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { UserContext } from '../providers/UserProvider'
import CurrentUser from './CurrentUser'

const Home = () => {
  const user = useContext(UserContext)
  console.log('user', user)
  return (
    <>
      {user ? (
        <CurrentUser {...user}></CurrentUser>
      ) : (
        <Authentification>
          <LinkStyled to="/signin">
            <DoorLeft>
              <Title>Sign in</Title>
            </DoorLeft>
            <DoorShadowLeft></DoorShadowLeft>
          </LinkStyled>
          <LinkStyled to="/signup">
            <DoorRight>
              <Title>Sign up</Title>
            </DoorRight>
            <DoorShadowRight></DoorShadowRight>
          </LinkStyled>
        </Authentification>
      )}
    </>
  )
}

export default Home

const Authentification = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 80vh;
  grid-gap: 2rem;
  text-align: center;
`

const LinkStyled = styled(Link)`
  position: relative;
  text-decoration: none;
  color: #000;
`

const DoorShadow = css`
  position: absolute;
  top: 18px;
  height: 480px;
  width: 258px;
  background-color: #000;
  transition: all 0s ease-out 0.5s;
  z-index: 1;
`

const DoorShadowLeft = styled.div`
  ${DoorShadow}
  right: 0;
`

const DoorShadowRight = styled.div`
  ${DoorShadow}
  left: 0;
`

const Door = css`
  position: absolute;
  top: 0;
  width: 250px;
  height: 500px;
  margin: 0 auto;
  /* box-shadow: 20px 10px 0 #000; */
  transition: all 1s ease-out 0.5s;
  background-color: #fff;
  z-index: 2;
`

const DoorKnob = css`
  position: absolute;
  content: '';
  top: 50%;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #000;
`

const DoorLeft = styled.div`
  ${Door}
  right: 10px;

  &:hover {
    right: 30px;
    transform: skew(0deg, -10deg);
  }

  &:before {
    ${DoorKnob}
    right: 10px;
  }
`

const DoorRight = styled.div`
  ${Door}
  left: 10px;

  &:hover {
    left: 30px;
    transform: skew(0deg, 10deg);
  }

  &:before {
    ${DoorKnob}
    left: 10px;
  }
`

const Title = styled.h1`
  margin-top: 5rem;
`
