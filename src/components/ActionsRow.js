import React from 'react'
import styled from 'styled-components'

export const ActionsRow = props => {
  const { generateDanceFloor } = props
  return (
    <StyledActionsRow>
      <Action>
        action1
      </Action>
      <Action>
        action2
      </Action>
      <GenerateButton onClick={() => generateDanceFloor(2,2)}>
        generate
      </GenerateButton>
    </StyledActionsRow>
  )
}

const StyledActionsRow = styled.div`
  display: flex;
  justify-content: center;
`

const Action = styled.div`
  background-color: #f3f3f3;
  margin: 10px;
`

const GenerateButton = styled.button``