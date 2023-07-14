
import { useDispatch, useSelector } from 'react-redux'

import {
    selectCartCount, 
    selectIsCartOpen
} from '../../store/cart/cart.selector'
import {setIsCartOpen} from '../../store/cart/cart.action'

import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles.jsx'

const CartIcon = () => {
    const dispatch = useDispatch()
   
    const cartCount = useSelector(selectCartCount)
    const isCartOpen = useSelector(selectIsCartOpen)

    const toggleIsCartOpen= () => dispatch (setIsCartOpen(!isCartOpen))
    return (
        <CartIconContainer
        onClick={() => toggleIsCartOpen(true)} 
    
       >
            <ShoppingIcon className='shopping-icn'/>
            <ItemCount>{cartCount}</ItemCount>

        </CartIconContainer>
    )


}

export default CartIcon

