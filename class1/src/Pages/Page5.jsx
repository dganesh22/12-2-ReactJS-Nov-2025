import React, { Component } from 'react'

// global variable
let x = 12;
const y = 25.66;

let view = true;

let colors = ["red", "blue", "green", "orange", "white"]

let users = [
    {
        id: 1,
        name: "john",
        email: "john@gmail.com",
        age: 22,
        address: {
            city: "bengaluru"
        }
    },
    {
        id: 2,
        name: "mark",
        email: "mark@gmail.com",
        age: 25,
        address: {
            city: "mysore"
        }
    },
    {
        id: 3,
        name: "dwene",
        email: "dwene@gmail.com",
        age: 28,
        address: {
            city: "mangaluru"
        }
    }
]

class Page5 extends Component {
    constructor(props) {
        super(props)
        // property
        this.p = 1235.56;
        this.q = 523.356;
    }

    clickHandler() {        
        alert("button clicked")
    }
    
    render() {
        
        // local 
        let a = 256;
        const b = 152.66;

        return (
            <div>
                <h3>Variables and Data binding Class Component</h3>
                <h4> x = { x } </h4>
                <h4> y = { y } </h4>
                <hr />

                <h4> a = { a } </h4>
                <h4> b = { b } </h4>
                <h4> sum  = { a + b } </h4>
                <hr />

                <h4> p = { this.p } </h4>
                <h4> q = { this.q } </h4>
                <hr />

                <h3> Boolean = { view ? <span>Say True</span>: <span>Say False</span>} </h3>
                <hr />

                <div>
                    {
                        colors?.map(function(item,index){
                            return (
                                <p key={index}> { item } </p>
                            )
                        })
                    }
                </div>

                <hr />

                <section>
                    {
                        users?.map((item,index) => {
                            return (
                                <div key={index}>
                                    <h3> { item?.name } </h3>
                                    <p> email = { item?.email } </p>
                                    <p> age = { item?.age } </p>
                                    <p>city = { item?.address?.city } </p>
                                </div>
                            )
                        })
                    }
                </section>

                <button onClick={this.clickHandler}>click me</button>
            </div>
        )
    }
}

export default Page5