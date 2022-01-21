import React from 'react'

import CollectionsOverview from '../../components/collection-overview/CollectionsOverview.component'
import { Route } from 'react-router-dom'
import CollectionPage from '../collectionPage/CollectionPage.component'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { collectionsFetchingAsync, updateCollections } from '../../redux/shop/shop.actions'
import { withSpinner } from '../../components/with-spinner/withSpinner.HOC'
import CollectionPageContainer from '../collectionPage/CollectionPageContainer.component'
import CollectionsOverviewContainer from '../../components/collection-overview/CollectionsOverviewContainer.component'


class ShopPage extends React.Component {
   componentDidMount() {
      const { collectionsFetchingAsync } = this.props
      collectionsFetchingAsync()
   }


   render() {
      const { match } = this.props;
      return (
         <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
         </div>
      )
   }
}


const mapDispatchToProps = (dispatch) => ({
   collectionsFetchingAsync: () => dispatch(collectionsFetchingAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage)