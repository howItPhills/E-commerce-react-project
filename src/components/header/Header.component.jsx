import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'


const Header = ({ currentUser }) => (
   <div className="header">
      <Link to='/'><Logo className='logo' /></Link>
      <div className="options">
         <Link to='/shop' className='option'>shop</Link>
         <Link to='/contact' className='option'>contact</Link>
         {
            currentUser ?
               <div onClick={() => auth.signOut()} className='option'>sign out</div> :
               <Link to='/signin' className='option'>sign in</Link>
         }
      </div>
   </div>
)

const mapStateToProps = state => ({
   currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)