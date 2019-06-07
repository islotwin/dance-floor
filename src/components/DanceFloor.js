import React from 'react'
import styled from 'styled-components'

export class DanceFloor extends React.Component {
  state = {
    canvas: null
  }
  componentDidMount() {
    const canvas = this.refs.canvas || {}
    console.log(canvas)
    const canvasCtx = canvas.getContext('2d')
    this.props.setCanvasCtx(canvasCtx)
  }
  render() {
    const { width = 300, height = 500, } = this.props
    return (
      <Canvas ref="canvas" width={width} height={height}>
        dance floor
      </Canvas>
    )  
  }
}

const Canvas = styled.canvas`
  background-color: #f3f3f3;
  margin: auto;
  display: block;
  padding: 0;
`