import React from 'react'
import styled from 'styled-components'

export const Action = props => {
  const { label } = props
  return (
    <StyledAction>
      <Input {...props}/>
      <Label>{label}</Label>
    </StyledAction>
  )
}

const StyledAction = styled.div`
  margin: 0 20px;
`

const Label = styled.label`
  font-size: 9px;
  font-weight: 500;
  display: block;
  margin-bottom: 2px;
  color: #222;
  text-transform: uppercase;
`

const Input = styled.input`
  border-style: none;
  outline: none;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  background-color: white;
  font: inherit;
  padding: 6px 0;
  width: 100%;
  margin-bottom: 3px;
  color: #222;
  &:hover {
    border-bottom: 1px solid #ccc;
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid #ccc;
  }
`