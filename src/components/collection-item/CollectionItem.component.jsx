import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/CustomButton.component'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'
import { compose } from 'redux'
import { useNavigate } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'

const CollectionItem = ({ item, addItem, history, currentUser, ...otherProps }) => {
   const { imageUrl, name, price } = item
   const navigate = useNavigate();
   return (
      <div className='collection-item' >
         <div
            style={{
               background: `url(${imageUrl}) center/cover`
            }}
            className='photo' />
         <div className='footer'>
            <span className="item-name">{name}</span>
            <span className="item-price">${price}</span>
         </div>
         <CustomButton isInverted
            onClick={() => currentUser ? addItem(item) : navigate('/signin')}
         >add to cart</CustomButton>
      </div >
   )
}


const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
   addItem: item => dispatch(addItem(item))
})


export default compose(
   connect(mapStateToProps, mapDispatchToProps),
)(CollectionItem)
