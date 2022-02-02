import React from 'react'
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/CustomButton.component'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../cart-item/CartItem.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useNavigate } from 'react-router-dom';
import { toggleCartDropdown } from '../../redux/cart/cart.actions'

const CartDropdown = () => {
   const cartItems = useSelector(selectCartItems)
   const dispatch = useDispatch()
   const navigate = useNavigate() // replacing useHistory to use navigate instead of history.push()

   return (
      <div className='cart-dropdown'>
         <div className='exit-button' onClick={() => dispatch(toggleCartDropdown())}>&#10005;</div>
         <div className='cart-items'>
            {cartItems.length ?
               cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
               <span className='empty-cart'>Your cart is empty </span>}
         </div>
         <CustomButton onClick={() => {
            navigate('/checkout');
            dispatch(toggleCartDropdown());
         }}>
            Go to checkout
         </CustomButton>
      </div>
   )
}

export default CartDropdown;