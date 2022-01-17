import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/CollectionItem.component';
import CustomButton from '../custom-button/CustomButton.component';
import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items, routeName, history, match }) => (
   <div className='collection-preview'>
      <h1 className="title">{title}</h1>
      <div className='collection'>
         {items
            .filter((id, idx) => idx < 4)
            .map(item => <CollectionItem key={item.id} item={item} />)}
      </div>
      <CustomButton inverted onClick={() => history.push(`${match.path}/${routeName}`)} className='see-more-button'>See more...</CustomButton>
   </div>
)

export default withRouter(CollectionPreview)
