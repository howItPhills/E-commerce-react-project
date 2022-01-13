import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/CustomButton.component'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addItem }) => {
   const { imageUrl, name, price } = item
   return (
      <div className='collection-item' >
         <div
            style={{
               background: `url(${imageUrl}) center/cover`
            }}
            className='photo' />
         <div className='footer'>
            <span className="item-name">{name}</span>
            <span className="item-price">{price}</span>
         </div>
         <CustomButton inverted onClick={() => addItem(item)}>add to cart</CustomButton>
      </div >
   )
}


const mapDispatchToProps = dispatch => ({
   addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
