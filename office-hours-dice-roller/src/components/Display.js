import React, { Component } from 'react'

export class Display extends Component {
  render() {
    // console.log(this.props.name)
    return (
      <>
        <h1>
          {this.props.name.map(value => {
            return <p>{value}</p>
          })}
        </h1>
      </>
    )
  }
}

export default Display