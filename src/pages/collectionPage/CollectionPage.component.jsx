import React from 'react'
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/CollectionItem.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection-page.styles.scss'

const CollectionPage = ({ collection: { title, items } }) => {
   return (
      <div className='collection-page'>
         <h2 className="title">{title}</h2>
         <div className='collection-page-items'>
            {
               items.map(item => <CollectionItem key={item.id} item={item} />)
            }
         </div>
      </div>
   )
}

const mapStateToProps = (state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state) // selectCollection is a curried function 
})

export default connect(mapStateToProps)(CollectionPage)
