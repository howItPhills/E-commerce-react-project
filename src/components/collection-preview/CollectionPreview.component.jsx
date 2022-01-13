import React from 'react';
import CollectionItem from '../collection-item/CollectionItem.component';
import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => (
   <div className='collection-preview'>
      <h1 className="title">{title}</h1>
      <div className='collection'>
         {items
            .filter((id, idx) => idx < 4)
            .map(item => <CollectionItem key={item.id} item={item} />)}
      </div>
   </div>
)

export default CollectionPreview
