import React from 'react'
import { ActionsRow } from './ActionsRow';
import { DanceFloor } from './DanceFloor';
import styled from 'styled-components'
import randomColor from 'randomcolor'

export class Layout extends React.Component {
  state = {
    isLoading: true,
    canvasCtx: null,
    width: 300,
    height: 300
  }

  tileSize = 100

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1000)
  }
  setCanvasCtx = ctx => {
    this.setState({ canvasCtx: ctx })
  }
  showDanceFloor = (columns, rows) => {
    const size = this.tileSize
    console.log(columns)
    this.setState({
      width: parseInt(columns*size),
      height: parseInt(rows*size)
    }, () => {
      for(let x = 0; x < rows; x++) {
        for(let y = 0; y < columns; y++) {
          this.drawTile(x*size, y*size)
        }
      }
    })
  }
  drawTile = (x, y) => {
    console.log(x, y)
    const { canvasCtx } = this.state
    const size = this.tileSize
    canvasCtx.fillStyle = randomColor({ format: "rgb" })
    canvasCtx.fillRect(x, y, size, size)
  }
  render() {
    const { isLoading, width, height } = this.state
    return (
      isLoading ? <div>loading...</div>: 
      (
        <StyledLayout >
          <ActionsRow generateDanceFloor={this.showDanceFloor}/>
          <DanceFloor setCanvasCtx={this.setCanvasCtx} width={width} height={height}/>
        </StyledLayout>
      )
    )  
  }
} 

const StyledLayout = styled.div`
`