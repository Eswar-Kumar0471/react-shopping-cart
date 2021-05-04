import React, { Component } from 'react';
import formatCurrency from '../util';

export default class Cart extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div>
               {
               cartItems.length === 0 ? (<div className="cart cart-header">Cart is Empty</div>
               ):(
               <div className="cart cart-header">You have {cartItems.length} products in the cart</div> 
               )}
               <div>
                   <div className="cart"></div>
                   <ul className="cart-items">
                       {cartItems.map((item)=>(
                           <li key={item.id}>
                               <div>
                                   <img src={item.image} alt={item.title}></img>
                               </div>
                               <div>
                                   <div>{item.title}</div>
                                   <div className="right">
                                       {formatCurrency(item.price)} x {item.count} {" "}
                                   <button className="button" onClick={()=>this.props.removeFromCart(item)}>X</button> 
                                   </div>
                               </div>
                           </li>
                       ))}
                   </ul>
               </div>
               {cartItems.length !==0 && (
                   <div className="cart">
                   <div className="total">
                       <div>
                           Total:{" "}
                           {formatCurrency(cartItems.reduce((a,c)=>a+c.price*c.count,0))}
                       </div>
                       <button className="button primary">Proceed</button>
                   </div>
               </div>
               )}
               
            </div>
            
        );
    }
}