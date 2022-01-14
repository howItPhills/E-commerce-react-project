import React from 'react'
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/CollectionItem.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection-page.styles.scss'

const CollectionPage = ({ collection: { id, items, title } }) => {
   return (
      <div className='collection-page'>
         <h2 className="title">{title}</h2>
         <div className='collection-page-items'>
            {
               items.map(item => <CollectionItem key={id} item={item} />)
            }
         </div>
      </div>
   )
}

const mapStateToProps = (state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
