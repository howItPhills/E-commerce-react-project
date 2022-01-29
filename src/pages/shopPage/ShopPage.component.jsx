import React from 'react'

import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import CollectionPageContainer from '../collectionPage/CollectionPageContainer.component'
import CollectionsOverviewContainer from '../../components/collection-overview/CollectionsOverviewContainer.component'
import { collectionsFetchingStart } from '../../redux/shop/shop.actions';


class ShopPage extends React.Component {
   componentDidMount() {
      const { collectionsFetchingStart } = this.props;
      collectionsFetchingStart();
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


const mapDispatchToProps = (dispatch) => {
   return {
      collectionsFetchingStart: () => dispatch(collectionsFetchingStart())
   }
}

export default connect(null, mapDispatchToProps)(ShopPage)