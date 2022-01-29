import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartDropdown from '../cart-dropdown/CartDropdown.components';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { HeaderContainer, OptionContainer, OptionsContainer } from './Header.styles';
import CartIconContainer from '../cart-icon/CartIconContainer.component';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => (
   <HeaderContainer>
      <Link to='/'><Logo /></Link>
      <OptionsContainer>
         <OptionContainer to='/shop'>shop</OptionContainer>
         <OptionContainer to='/contact' >contact</OptionContainer>
         {
            currentUser ?
               <OptionContainer as='div' onClick={signOutStart}>sign out</OptionContainer> :
               <OptionContainer to='/signin'>sign in</OptionContainer>
         }
         <CartIconContainer className='option' />
      </OptionsContainer>
      {
         hidden ? null : <CartDropdown />
      }
   </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden,
})

const mapDispatchToProps = dispatch => ({
   signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)