import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/CartIcon.component'
import CartDropdown from '../cart-dropdown/CartDropdown.components';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({ currentUser, hidden }) => (
   <div className="header">
      <Link to='/'><Logo className='logo' /></Link>
      <div className="options">
         <Link to='/shop' className='option'>shop</Link>
         <Link to='/contact' className='option'>contact</Link>
         {
            currentUser ?
               <div onClick={() => auth.signOut()} className='sign-out option'>sign out</div> :
               <Link to='/signin' className='option'>sign in</Link>
         }
         <CartIcon className='option' />
      </div>
      {
         hidden ? null : <CartDropdown />
      }
   </div>
)

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)