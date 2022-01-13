import React from 'react'
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/CustomButton.component'
import { connect } from 'react-redux'
import CartItem from '../cart-item/CartItem.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems }) => {
   return (
      <div className='cart-dropdown'>
         <div className='cart-items'>
            {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
         </div>
         <CustomButton>Go to checkout</CustomButton>
      </div>
   )
}

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)
