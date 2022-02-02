import { createStructuredSelector } from "reselect"
import { selectIsFetching } from "../../redux/shop/shop.selectors"
import { connect } from "react-redux"
import { compose } from "redux"
import { withSpinner } from "../../components/with-spinner/withSpinner.HOC"
import CollectionsOverview from "./CollectionsOverview.component"
import { selectShopPageCollectionsArray } from './../../redux/shop/shop.selectors'


const mapStateToProps = createStructuredSelector({
   collections: selectShopPageCollectionsArray,
})

const CollectionsOverviewContainer = compose(
   connect(mapStateToProps),
   withSpinner,
)(CollectionsOverview)

export default CollectionsOverviewContainer