import React, { Component } from 'react';
import formatCurrency from '../util'
class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product=>(
                        <li key={product.id}>
                            <div className="product">
                                <a href={"#" +product.id}>
                                    <img src={product.image} alt={product.title}></img>
                                    <p>{product.title}</p>
                                    </a>
                                    <div className="product-price">
                                        {formatCurrency(product.price)}
                                    </div>
                                    <button className="button primary">Add To Cart</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Products;