import React from 'react'
import { ReactComponent as CartImage } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartDropdown, itemCount }) => (
   <div className='cart-icon' onClick={toggleCartDropdown}>
      <CartImage className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
   </div>
)


export default CartIcon