import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from 'components/Common/Logo'

const Wrapper = styled.section`
  position: sticky;
  background-color: #fff;
  z-index: 100;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  max-width: 1600px;
  margin: 0 auto;
  box-shadow: inset 0px -1px 0px #e2e2ea;
`
const LogoWrapper = styled.div`
  margin-left: 25px;
  a {
    text-decoration: none;
  }
`

const logoProps = {
  size: 120,
  color: '#005e8c'
}

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link to='/'>
          <Logo {...logoProps} />
        </Link>
      </LogoWrapper>
    </Wrapper>
  )
}

export default Header
