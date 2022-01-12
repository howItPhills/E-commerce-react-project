import React from 'react'
import { ReactComponent as CartImage } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { connect } from 'react-redux';
import { toggleCartDropdownAC } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartDropdown }) => (
   <div className='cart-icon' onClick={toggleCartDropdown}>
      <CartImage className='shopping-icon' />
      <span className='item-count'>0</span>
   </div>
)

const mapDispatchToProps = dispatch => ({
   toggleCartDropdown: () => dispatch(toggleCartDropdownAC())
})

export default connect(null, mapDispatchToProps)(CartIcon)