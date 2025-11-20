import React from 'react'

let x = 146.77;
const y = 1257.25;

let str = "Welcome to the string"

let isUser = true

let users = ["john", "sam", "tom", "harry"]

let courses = [
    {
        id: 1,
        title: "frontend",
        duration: "4 month"
    },
    {
        id: 2,
        title: "backend",
        duration: "3.5 month"
    }
]

const Page7 = (props) => {
    // local variables
    let a = 1245;
    let b = 35.125;

    return (
        <div>
            <h2>variables in arrow function component</h2>
            <h3> a = { a } and  b = { b } </h3>
        </div>
    )
}

export default Page7