import React from 'react'
import CollectionPreview from '../collection-preview/CollectionPreview.component'
import './collection-overview.styles.scss'

import { selectShopPageCollections } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

const CollectionOverview = ({ collections }) => {
   return (
      <div className='collections'>
         {collections.map(({ id, ...otherCollectionsProps }) => <CollectionPreview key={id} {...otherCollectionsProps} />)}
      </div>
   )
}

const mapStateToProps = createStructuredSelector({
   collections: selectShopPageCollections,
})

export default connect(mapStateToProps)(CollectionOverview)
