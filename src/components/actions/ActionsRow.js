import React, { useState } from 'react'
import styled from 'styled-components'
import { Action } from './Action';

export const ActionsRow = props => {
  const { generateDanceFloor } = props
  const [rows, setRows] = useState(3)
  const [columns, setColumns] = useState(3)
  return (
    <StyledActionsRow>
      <Action value={"" + rows} onChange={(event) => setRows(+event.target.value)} label="Set rows quantity"/>
      <Action value={"" + columns} onChange={(event) => setColumns(+event.target.value)} label="Set columns quantity"/>
      <GenerateButton onClick={() => generateDanceFloor(columns, rows)}>
        generate
      </GenerateButton>
    </StyledActionsRow>
  )
}

const StyledActionsRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`

const GenerateButton = styled.button`
  border-style: none;
  outline: none;
  box-sizing: border-box;
  background-color: #f3f3f3;
  border-radius: 4px;
  padding: 14px 10px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`