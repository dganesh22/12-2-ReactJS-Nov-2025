import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {image, title, id, price, stock } = this.props
        return (
            <div className='card'>
                <img src={image} alt={"no image found"} />
                <h4> { this.props.title } </h4>
                <p> price: &#8377; { price } </p>
                <p>stock: { stock } items </p>
            </div>
        )
    }
}

export default Product