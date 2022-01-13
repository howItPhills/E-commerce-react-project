import React from 'react'
import { ReactComponent as CartImage } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { connect } from 'react-redux';
import { toggleCartDropdownAC } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


const CartIcon = ({ toggleCartDropdown, itemCount }) => (
   <div className='cart-icon' onClick={toggleCartDropdown}>
      <CartImage className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
   </div>
)

const mapStateToProps = createStructuredSelector({
   itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
   toggleCartDropdown: () => dispatch(toggleCartDropdownAC())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)