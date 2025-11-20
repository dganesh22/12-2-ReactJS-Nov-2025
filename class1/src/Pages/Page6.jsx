import React from 'react'

// global variable
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

function Page6(props) {
    return (
        <div>
            <h2>Variables in functional component</h2>
            <h3> x = { x } and y = { y } , sum = { x + y } </h3>

            <hr />  
            <h3> { str } </h3>
            <hr />

            <h3> Boolean = { isUser ? "User": "Non User"} </h3>
            <hr />

            <h3>array</h3>
            <ol>
                 {
                    users?.map((item,index) => {
                        return (
                            <li key={index}> { item } </li>
                        )
                    })
                 }
            </ol>

            <hr />

            <h3>Courses</h3>
            <div>
                {
                    courses?.map((item,index) => {
                        return (
                            <div key={index}>
                                <h4> { item?.title } and duration is {item?.duration} </h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Page6