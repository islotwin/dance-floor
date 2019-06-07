import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const changeColor = keyframes`
  0% {
    color: #FF7777;
  }
  25% {
    color: #77FFEF;
  }
  50% {
    color: #FFFF77;
  }
  75% {
    color: #77FFEF;
  }
  100% {
    color: #FF7777;
  }
`

export const Spinner = styled.div`
  border-radius: 50%;
  font-size: 11px;
  text-indent: -99999em;
  margin: 55px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  transform: translateZ(0);
  animation: ${changeColor} 5s infinite ease-in-out;

  :before, :after {
    border-radius: 50%;
  }
  :before, :after {
    position: absolute;
    content: '';
  }
  :after {
    width: 5.2em;
    height: 10.2em;
    background: #fff;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 5.1em;
    transform-origin: 0px 5.1em;
    animation: ${rotate} 1.5s infinite linear;
  }
`