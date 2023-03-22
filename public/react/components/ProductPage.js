import React from 'react'
import './ProductPage.css'

export function ProductPage(props) {
    return (
        <div className = "ProductPage"  >
            <section classname = "product">
                <img src="" alt="productimage" />
                <div className = "product description">
                    <h1 className = "product Title">Product Title</h1>
                    <h2 className = "product Price">$XX.XX</h2>
                    <div className ="productSpecs" >
                        <p> Product Description with specs and details</p>
                    </div>
                    <div className = "CartButtons">
                        <button className = "button">Add to Cart</button>
                        <button className = "button">View Cart</button>
                    </div>
                </div>
            </section>
            <section classname = "Update button">
                <button className = "button">
                    Update Item
                </button>
            </section>
        </div>
    )
}