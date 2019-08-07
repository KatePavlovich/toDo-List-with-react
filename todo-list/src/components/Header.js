import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => (
  <HeaderStyled>
    <LinkStyled to="/"><Logo>RM</Logo></LinkStyled>

  </HeaderStyled>)


export default Header

const HeaderStyled = styled.header`
    /* background-color: #033a03; */
`
const LinkStyled = styled(Link)`
    text-decoration: none;
`

const Logo = styled.h1`
    margin: 0 2rem;
    font-size: 3rem;
    color: #000;
`
