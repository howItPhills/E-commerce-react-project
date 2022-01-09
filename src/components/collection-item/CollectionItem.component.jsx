import React from 'react'
import './collection-item.styles.scss'


const CollectionItem = ({ imageUrl, name, price }) => (
   <div className='collection-item'>
      <div
         style={{
            background: `url(${imageUrl}) center/cover`
         }}
         className='photo' />
      <div className='footer'>
         <span className="item-name">{name}</span>
         <span className="item-price">{price}</span>
      </div>
   </div>
)

export default CollectionItem
