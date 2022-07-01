import React, { Component } from 'react'
import Display from './components/Display'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ["Nicole", "Jojo", "Alex", "William", "Will", "Samuel"]
    }
  }

  render() {
    // console.log(this.state.name)
    return (
      <>
        <Display name={this.state.name}/>
      </>
    )
  }
}

export default App