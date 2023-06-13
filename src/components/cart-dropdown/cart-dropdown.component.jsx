import { useContext  } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext, CartProvider } from '../../contexts/cart.context'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import {CartDropdowContainer, EmptyMessage, CartItems} from './cart-dropdown.styles.jsx'

const CardDropdown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate= useNavigate()

    const goToCheckoutHandler= () => {
        navigate('/checkout')
    }
    return(
        <CartDropdowContainer>
            <CartItems>
                {cartItems.length ? (cartItems.map((item) =>(
                <CartItem key={item.id} cartItem={item} />
                ))) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )
            }
                </CartItems>
                <Button onClick={goToCheckoutHandler} style={{fontSize: "12px" }}> GO TO CHECKOUT</Button>
        </CartDropdowContainer>
    )
}

export default CardDropdown