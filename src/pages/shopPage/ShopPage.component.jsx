import React from 'react'

import CollectionOverview from '../../components/collection-overview/CollectionOverview.component'
import { Route } from 'react-router-dom'
import CollectionPage from '../collectionPage/CollectionPage.component'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { collectionsFetchingAsync, updateCollections } from '../../redux/shop/shop.actions'
import { withSpinner } from '../../components/with-spinner/withSpinner.HOC'
import { createStructuredSelector } from 'reselect'
import { selectIsCollections, selectIsFetching } from '../../redux/shop/shop.selectors'

const CollectionPageWithSpinner = withSpinner(CollectionPage)
const CollectionOverviewWithSpinner = withSpinner(CollectionOverview)

class ShopPage extends React.Component {
   componentDidMount() {
      const { collectionsFetchingAsync } = this.props
      collectionsFetchingAsync()
   }


   render() {
      const { match, isFetching, isCollections } = this.props;
      return (
         <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => < CollectionOverviewWithSpinner isLoading={isFetching} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollections} {...props} />} />
         </div>
      )
   }
}

const mapStateToProps = createStructuredSelector({
   isFetching: selectIsFetching,
   isCollections: selectIsCollections
})

const mapDispatchToProps = (dispatch) => ({
   collectionsFetchingAsync: () => dispatch(collectionsFetchingAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)