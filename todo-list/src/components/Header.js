import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../providers/UserProvider'
import Exit from './svg/exit'
import { signOut } from '../config/firebase'

const Header = () => {
  const user = useContext(UserContext)
  return (
    <HeaderStyled>
      <LinkStyled to="/">
        <Logo>RM</Logo>
      </LinkStyled>
      {user && user.photoURL && (
        <User>
          <Link to="profile">
            <Img src={user.photoURL} alt={user.displayName} title="to profile" />
          </Link>
          <div title="sign out" onClick={signOut}>
            <Exit />
          </div>
        </User>
      )}
    </HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled.header`
  /* background-color: #033a03; */
  display: flex;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`
const LinkStyled = styled(Link)`
  text-decoration: none;
`

const Logo = styled.h1`
  margin: 0 2rem;
  font-family: 'Beth Ellen', cursive;
  font-size: 3rem;
  color: #000;
`

const User = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: 1rem;
`

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
