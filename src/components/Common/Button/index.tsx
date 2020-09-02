import React from 'react'
import styled from 'styled-components'

const variables = {
  defaultColor: '#005e8c',
  crossSize: 15
}

const Wrapper = styled.div`
  background-color: ${props => props.color || variables.defaultColor};
  border-radius:8px;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:14px;
  padding:13px 31px;
  text-decoration:none;
  }
`

interface Props {
  title: string,
  color?: string
}

const Button: React.FC<Props> = props => {
  const { title, color } = props

  return (
    <Wrapper color={color}>{title}</Wrapper>
  )
}

export default React.memo(Button)
