import React from 'react'
import styled from 'styled-components'
import Item from 'components/Common/Sidebar/Menu/Item'
import IconTasks from 'components/Common/Icons/Menu/Tasks'
import ErrorBoundary from 'components/Common/ErrorBoundary'
import IconMessages from 'components/Common/Icons/Menu/Messages'
import IconSchedule from 'components/Common/Icons/Menu/Schedule'
import IconActivity from 'components/Common/Icons/Menu/Activity'
import IconSettings from 'components/Common/Icons/Menu/Settings'
import IconDashboard from 'components/Common/Icons/Menu/Dashboard'

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  @media (max-width: 620px) {
    margin-top: 40px;
  }
`

const itemsData = [
  {
    name: 'Dashboard',
    icon: IconDashboard(),
    link: '/apps'
  },
  {
    name: 'Messages',
    icon: IconMessages(),
    link: '/dummy1'
  },
  {
    name: 'Tasks',
    icon: IconTasks(),
    link: '/dummy2'
  },
  {
    name: 'Schedule',
    icon: IconSchedule(),
    link: '/dummy3'
  },
  {
    name: '. . .',
    icon: IconActivity(),
    link: '/dummy4'
  },

]

interface IItemProps {
  name: string
  icon: object | string
  link: string
}

const items = itemsData.map((item: IItemProps, idx: number): object => (
  <Item key={idx} {...item} />
))

const Menu = () => {
  return (
    <ErrorBoundary>
      <Wrapper>{items}</Wrapper>
    </ErrorBoundary>
  )
}

export default Menu
