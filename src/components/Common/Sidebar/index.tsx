import React from 'react'
import styled from 'styled-components'
import Menu from 'components/Common/Sidebar/Menu'

const Wrapper = styled.section`
  position: sticky;
  padding-top: 30px;
  top: 70px;
  display: flex;
  flex-direction: column;
  max-width: 250px;
  height: calc(100vh - 150px);
  min-height: 640px;
`

const Sidebar = () => {
  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  )
}

export default Sidebar
