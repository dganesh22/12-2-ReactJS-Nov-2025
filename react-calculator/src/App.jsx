import React, { Component } from 'react'
import Display from './component/Display'
import Keypad from './component/Keypad'

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        inp: '',
        out: ''
      }
    }

    btnClick(val) {
      console.log(`btn =`, val)
      if(val === "CE") {
        this.setState({
          inp: "",
          out: ""
        })
      } else if (val === "C") {
        this.setState({
          inp: ""
        })
      } else if (val === "BS") {
          this.setState({
              inp: this.state.inp.substring(0,this.state.inp.length-1)
          })
      } else if (val === "sqr") {
        this.setState({
            out: Math.pow(this.state.inp,2)
        })
      } else if (val === "sqrt") {
           this.setState({
            out: Math.sqrt(this.state.inp)
           })
      } else if (val === "1/x") {
            this.setState({
              out: Math.pow(1,this.state.inp)
            })
      }else if (val === "+/-") {
         this.setState({
             inp: Math.abs(this.state.inp)
         })
      } else if (val === "=") {
          this.setState({
            out: eval(this.state.inp)
          })
      } else {
          this.setState({
            inp: this.state.inp + val
          })
      }
    }

    render() {
      return (
        <div className="container">
             <div className="row">
                <div className="title">
                    <h3>React-Calculator</h3>
                </div>
             </div>

             <section className="calculator">
                  <Display inp={this.state.inp} out={this.state.out} />
                  <Keypad btnHandler={this.btnClick.bind(this)} />
             </section>
        </div>
      )
    }
}

export default App