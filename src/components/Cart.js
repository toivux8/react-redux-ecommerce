import React, { Component } from 'react';
import formatCurrency from '../util';

export default class Cart extends Component {
  render() {

    const {cartItems} = this.props

    return (
      <div>
        <div>
            { cartItems.length === 0 ? <div className='cart cart-header'>Cart is empty</div> : <div className='cart cart-header'>You have {cartItems.length} item(s) in the cart.</div>}
        </div>
        <div className='cart'>
          <ul className='cart-items'>
            {cartItems.map((item) => (
              <li key={item._id}>
                <div>
                  <img src={item.image} alt={item.title}></img>
                </div>
                <div>
                  <div>{item.title}</div>
                  <div className='right-btn'>
                    {formatCurrency(item.price)} x {item.count}{" "}
                    <button className='button' onClick={() => this.props.removeFromCart(item)}>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {cartItems.length !== 0 && (
          <div className='cart'>
          {/* Your bill is {totalBill} $ */}
            <div className='total'>
              <div>Total: {" "}
                { formatCurrency(cartItems.reduce((a,b) => a + b.price * b.count, 0)) }
              </div> 
            
              <button className='button primary'>Proceed</button>
            </div>
          </div>
        )}

      </div>
    )
  }
}
