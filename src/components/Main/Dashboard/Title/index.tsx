import React from 'react'
import styled from 'styled-components'
import ContentTitleSelector from './Selector'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (max-width: 450px) {
    justify-content: center;
  }
`
const Header = styled.div`
  @media (max-width: 1050px) {
    display: none;
  }
`
const Username = styled.span`
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #171725;
  @media (max-width: 450px) {
    display: none;
  }
`
const Text = styled.span`
  font-size: 18px;
  letter-spacing: 0.1px;
  color: #92929d;
  margin-left: 10px;
  font-family: 'Roboto', sans-serif;
`
const Controls = styled.div`
  display: flex;
  margin-right: 20px;
`

const Title = () => {
  return (
    <Wrapper>
      <Header>
        <Username>Hi Pierre,</Username>
        <Text>here are your Spark apps</Text>
      </Header>
      <Controls>
        <ContentTitleSelector />
      </Controls>
    </Wrapper>
  )
}

export default Title
