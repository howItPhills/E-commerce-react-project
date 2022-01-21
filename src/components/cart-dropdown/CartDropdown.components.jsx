import React from 'react'
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/CustomButton.component'
import { connect } from 'react-redux'
import CartItem from '../cart-item/CartItem.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartDropdown } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch }) => {
   return (
      <div className='cart-dropdown'>
         <div className='cart-items'>
            {cartItems.length ?
               cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
               <span className='empty-cart'>Your cart is empty </span>}
         </div>
         <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartDropdown());
         }}>
            Go to checkout
         </CustomButton>
      </div>
   )
}

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))