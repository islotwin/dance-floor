import React from 'react'
import { ActionsRow } from './ActionsRow';
import { DanceFloor } from './DanceFloor';
import styled from 'styled-components'
import randomColor from 'randomcolor'
import { Spinner } from './Spinner';

export class Layout extends React.Component {
  state = {
    isLoading: true,
    canvasCtx: null,
    width: 300,
    height: 300
  }

  tileSize = 100

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 2000)
  }
  setCanvasCtx = ctx => {
    this.setState({ canvasCtx: ctx })
  }
  showDanceFloor = (columns, rows) => {
    const size = this.tileSize
    this.setState({
      width: (columns*size),
      height: (rows*size)
    }, () => {
      for(let x = 0; x < columns; x++) {
        for(let y = 0; y < rows; y++) {
          this.drawTile(x*size, y*size)
        }
      }
    })
  }
  drawTile = (x, y) => {
    const { canvasCtx } = this.state
    const size = this.tileSize
    canvasCtx.fillStyle = randomColor({ format: "rgb" })
    canvasCtx.fillRect(x, y, size, size)
  }
  render() {
    const { isLoading, width, height } = this.state
    return (
      isLoading ? <Spinner/> : 
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