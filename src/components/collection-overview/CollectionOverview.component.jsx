import React from 'react'
import CollectionPreview from '../collection-preview/CollectionPreview.component'
import './collection-overview.styles.scss'

import { selectShopPageCollectionsArray } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

const CollectionOverview = ({ collections }) => {
   return (
      <div className='collections'>
         {collections.map(({ id, title, items, routeName }) => <CollectionPreview key={id} routeName={routeName} title={title} items={items} />)}
      </div>
   )
}

const mapStateToProps = createStructuredSelector({
   collections: selectShopPageCollectionsArray,
})

export default connect(mapStateToProps)(CollectionOverview)