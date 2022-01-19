import React from 'react'

import CollectionOverview from '../../components/collection-overview/CollectionOverview.component'
import { Route } from 'react-router-dom'
import CollectionPage from '../collectionPage/CollectionPage.component'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions'
import { withSpinner } from '../../components/with-spinner/withSpinner.HOC'


const CollectionPageWithSpinner = withSpinner(CollectionPage)
const CollectionOverviewWithSpinner = withSpinner(CollectionOverview)

class ShopPage extends React.Component {
   state = {
      isLoading: true,
   }


   unsubscribeFromCollectionsSnapshot = null;

   componentDidMount() {
      const collectionRef = firestore.collection('collections');
      const { updateCollections } = this.props
      collectionRef.onSnapshot(async snapshot => {
         const collections = convertCollectionsSnapshotToMap(snapshot)
         updateCollections(collections)
         this.setState({
            isLoading: false,
         })
      })
   }


   render() {
      const { match } = this.props;
      const { isLoading } = this.state
      return (
         <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => < CollectionOverviewWithSpinner isLoading={isLoading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => ({
   updateCollections: collections => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage)