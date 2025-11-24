import React, { Component } from 'react'

class Display extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <div className="display">
            <strong className="out"> { this.props.out || 0 } </strong>
            <strong className="inp"> { this.props.inp || 0 } </strong>
        </div>
      )
    }
}

export default Display