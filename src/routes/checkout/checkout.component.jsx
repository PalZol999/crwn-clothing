import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss'


const Checkout= ({product}) => {
    const {cartItems, addItemToCart, removeItemToCart,cartTotal} = useContext(CartContext)
    


    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='head-block'> 
                <span>Product</span>
                </div>
                <div className='head-block'> 
                <span>Description</span>
                </div>
                <div className='head-block'> 
                <span>Quantity</span>
                </div>
                <div className='head-block'> 
                <span>Price</span>
                </div>
                <div className='head-block'> 
                <span>Remove</span>
                </div>

            </div>
            {cartItems.map((cartItem) => {
                const {id, name, quantity} = cartItem
                return  (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>)

            })
               
            }
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    )

}

export default Checkout