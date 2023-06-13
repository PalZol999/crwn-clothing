import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import {CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total
} from  './checkout.styles.jsx'


const Checkout= ({product}) => {
    const {cartItems, addItemToCart, removeItemToCart,cartTotal} = useContext(CartContext)
    


    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock> 
                <span>Product</span>
                </HeaderBlock>
                <HeaderBlock> 
                <span>Description</span>
                </HeaderBlock>
                <HeaderBlock> 
                <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock> 
                <span>Price</span>
                </HeaderBlock>
                <HeaderBlock> 
                <span>Remove</span>
                </HeaderBlock>

            </CheckoutHeader>
            {cartItems.map((cartItem) => {
                const {id, name, quantity} = cartItem
                return  (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>)

            })
               
            }
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    )

}

export default Checkout