import React from 'react'
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/CustomButton.component'

const CartDropdown = () => {
   return (
      <div className='cart-dropdown'>
         <div className='cart-items' />
         <CustomButton>Go to checkout</CustomButton>
      </div>
   )
}

export default CartDropdown
