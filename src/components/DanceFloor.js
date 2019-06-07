import React from 'react'
import styled from 'styled-components'

export class DanceFloor extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas || {}
    console.log(canvas)
    const canvasCtx = canvas.getContext('2d')
    this.props.setCanvasCtx(canvasCtx)
  }
  render() {
    const { width, height, changeColorOnClick, changeColorOnMove, setMouseDown, onMouseLeave } = this.props
    return (
      <Canvas 
        ref="canvas" 
        width={width} 
        height={height} 
        onMouseDown={e => { setMouseDown(true); changeColorOnClick(e)}}
        onMouseUp={() => setMouseDown(false)}
        onMouseMove={e => changeColorOnMove(e)}
        onMouseLeave={onMouseLeave}
      />
    )  
  }
}

const Canvas = styled.canvas`
  background-color: 'transparent';
  margin: auto;
  display: block;
  padding: 0;
`