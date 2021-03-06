import { createStructuredSelector } from "reselect"
import { selectCollection, selectIsCollectionsFetching } from "../../redux/shop/shop.selectors"
import { connect } from "react-redux"
import { compose } from "redux"
import { withSpinner } from "../../components/with-spinner/withSpinner.HOC"
import CollectionPage from "./CollectionPage.component"


// const mapStateToProps = state => ({
//    isLoading: selectIsCollectionsFetching,
//    collection: selectCollection(ownProps.match.params.collectionId)(state) // selectCollection is a curried function
// })

// const CollectionPageContainer = compose(
//    connect(mapStateToProps),
//    withSpinner,
// )(CollectionPage)

// export default CollectionPageContainer