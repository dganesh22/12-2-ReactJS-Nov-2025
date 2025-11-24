import React, { Component } from 'react'
import { products } from '../assets/data'
import Product from '../Component/Product'

class Page10 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Props in Class Component</h1>
                <section className='products'>
                    {
                        products?.map((item,index) => {
                            return (
                                <Product key={index} {...item} />
                            )
                        })
                    }
                </section>
            </div>
        )
    }
}

export default Page10