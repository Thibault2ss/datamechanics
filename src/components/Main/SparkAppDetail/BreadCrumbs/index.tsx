import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const active = 'breadcrumb-item-active'

const colors = {
  blueColor: '#005e8c',
  grayColor: '#92929d'
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`

const Separator = styled.div`
  margin: 0px 10px;
`

const BreadCrumbItem = styled(NavLink).attrs({
  active
})`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #171725;
  
  letter-spacing: 0.1px;
  &.${active} {
    color: ${colors.blueColor};
    font-weight: bold;
  }
  &.${active} ${Separator} {
    display: none;
  }

`

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <Wrapper>
      {breadcrumbs.map(({
        match,
        breadcrumb
      }) => (
        <BreadCrumbItem key={match.url} to={match.url} exact activeClassName={active}>{breadcrumb} <Separator> &gt; </Separator></BreadCrumbItem>
      ))}
    </Wrapper>
  );
};

export default Breadcrumbs