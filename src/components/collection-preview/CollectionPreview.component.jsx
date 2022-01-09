import React from 'react';
import CollectionItem from '../collection-item/CollectionItem.component';
import './collection-preview.styles.scss'


const CollectionPreview = ({ title, items }) => (
   <div className='collection-preview'>
      <h1 className="title">{title}</h1>
      <div className='collection'>
         {items
            .filter((id, idx) => idx < 4)
            .map(({ id, ...otherItemProps }) => <CollectionItem key={id} {...otherItemProps} />)}
      </div>
   </div>
)

export default CollectionPreview
