
import { useContext } from 'react'
//import CartItem from '../cart-item/cart-item.component'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
import './cart-icon.styles.scss'

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
    const toggleIsCartOpen= () => setIsCartOpen(!isCartOpen)
    return (
        <div className='cart-icon-container' 
        onClick={() => toggleIsCartOpen(true)} 
    
       >
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>

        </div>
    )


}

export default CartIcon

