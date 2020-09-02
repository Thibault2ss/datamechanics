import React from 'react'
import styled from 'styled-components'
import ErrorBoundary from 'components/Common/ErrorBoundary'
import Title from './Title'
import SparkApps from './SparkApps'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  background-color: #fafafa;
  padding: 40px;
  @media (max-width: 450px) {
    padding: 10px;
  }
`

const Content = () => {
  return (
    <Wrapper>
      <Title />
      <ErrorBoundary>
        <SparkApps />
      </ErrorBoundary>
    </Wrapper>
  )
}

export default Content
