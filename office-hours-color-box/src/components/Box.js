import React, { Component } from 'react'

export class Box extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: ["red", "orange", "yellow", "green", "blue", "purple", "pink"],
      currentColor: null
    }
  }


  changeColor = () => {
    let randomNum = Math.floor(Math.random() * 7)
    this.setState({ currentColor: randomNum })
  }
  render() {
    return (
      <>
        <div className="square" onClick={this.changeColor} style={{backgroundColor: this.state.colors[this.state.currentColor]}}></div>
      </>
    )
  }
}

export default Box