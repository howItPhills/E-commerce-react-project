import { createStructuredSelector } from "reselect"
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors"
import { connect } from "react-redux"
import { compose } from "redux"
import { withSpinner } from "../../components/with-spinner/withSpinner.HOC"
import CollectionPage from "./CollectionPage.component"


const mapStateToProps = createStructuredSelector({
   isLoading: state => !selectIsCollectionsFetching(state)
})

const CollectionPageContainer = compose(
   connect(mapStateToProps),
   withSpinner,
)(CollectionPage)

export default CollectionPageContainer