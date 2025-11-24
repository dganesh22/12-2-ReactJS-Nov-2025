import React, { Component } from "react";


/* 
    state = qnty = 1

    2 handlers 
        increment 
        decrement
*/

class Page9 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qnty: 1
        }
    }

    incHandler() {
        this.setState({
            qnty: this.state.qnty + 1
        })
    }

    decHandler() {
        if(this.state.qnty <= 1) {
            this.setState({
                qnty: 1
            })
        } else {
            this.setState({
                qnty: this.state.qnty - 1
            })
        }
    }

    render() {
        return (
            <div>
                <h2>React Class Component</h2>
                <div>
                    <button disabled={this.state.qnty <= 1} onClick={this.decHandler.bind(this)} className="dec">-</button>
                    <strong> {this.state.qnty} </strong>
                    <button onClick={this.incHandler.bind(this)} className="inc">+</button>
                </div>
            </div>
        )
    }
}

export default Page9