import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { selectCartItemsTotal } from '../../redux/cart/cart.selectors'
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component'
import StripeCheckoutButton from '../../components/stripe-checkout/StripeCheckout.component'

const Checkout = ({ cartItems, total }) => (
   <div className='checkout-page'>
      <div className='checkout-header'>
         <div className='header-block'>
            <span>Product</span>
         </div>
         <div className='header-block'>
            <span>Description</span>
         </div>
         <div className='header-block'>
            <span>Quantity</span>
         </div>
         <div className='header-block'>
            <span>Price</span>
         </div>
         <div className='header-block'>
            <span>Remove</span>
         </div>
      </div>
      {cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)}
      <div className='total'>Total: ${total}</div>
      <div className='checkout-warning'>
         *Please use the following test credit card for payments*
         <br />
         Number: 4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} className='checkout-payment-button' />
   </div>
)

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   total: selectCartItemsTotal
})

export default connect(mapStateToProps)(Checkout)