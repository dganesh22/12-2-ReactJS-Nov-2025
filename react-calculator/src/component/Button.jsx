import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <div className="btn" onClick={() => this.props.btnHandler(this.props.val)}>
            { this.props.val }
        </div>
      )
    }
}

export default Button