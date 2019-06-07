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
    width: 0,
    height: 0,
    currentPosition: {
      x: null,
      y: null
    },
    isMouseDown: false
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
  getCurrentTile = ({ clientX, clientY }) => {
    const { canvasCtx } = this.state
    const size = this.tileSize
    const { x: offSetX, y: offSetY } = canvasCtx.canvas.getBoundingClientRect()
    const x = Math.floor((clientX - offSetX)/size)
    const y = Math.floor((clientY - offSetY)/size)
    return { x, y }
  }
  changeTileColor = (x, y) => {
    const size = this.tileSize
    this.drawTile(x*size, y*size)
    this.setState({
      currentPosition: {
        x,
        y
      }
    })
  }
  changeTileColorOnClick = e => {
    const { x, y } = this.getCurrentTile(e)
    this.changeTileColor(x, y)
  }
  changeTileColorOnMove = e => {
    const { isMouseDown, currentPosition } = this.state
    const { x, y } = this.getCurrentTile(e)
    if(isMouseDown) {
      return
    }
    if(currentPosition.x !== x || currentPosition.y !== y) {
      this.changeTileColor(x, y)
    }
  }
  render() {
    const { isLoading, width, height } = this.state
    return (
      isLoading ? <Spinner/> : 
      (
        <StyledLayout >
          <ActionsRow generateDanceFloor={this.showDanceFloor}/>
          <DanceFloor 
            setCanvasCtx={this.setCanvasCtx} 
            width={width} 
            height={height} 
            changeColorOnClick={this.changeTileColorOnClick}
            changeColorOnMove={this.changeTileColorOnMove}
            setMouseDown={isMouseDown => this.setState({ isMouseDown })}
            onMouseLeave={() => this.setState(
              { 
                currentPosition: 
                  {
                    x: null,
                    y: null
                  }
              })}
          />
        </StyledLayout>
      )
    )  
  }
} 

const StyledLayout = styled.div`
`