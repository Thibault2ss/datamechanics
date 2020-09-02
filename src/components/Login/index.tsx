import React from 'react'
import styled from 'styled-components'
import Logo from 'components/Common/Logo'
import LoginForm from 'components/Login/Form'
import LoginMenu from 'components/Login/Menu'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
  background-color: #005e8c;
}
`
const Section = styled.section`
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const logoProps = {
  size: 150,
  color: 'white'
}

const Login = () => {
  return (
    <>
      <GlobalStyle />
      <Section>
        <Logo {...logoProps} />
        <LoginForm />
        <LoginMenu />
      </Section>
    </>
  )
}

export default Login
