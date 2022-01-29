import { connect } from "react-redux"
import { compose } from "redux"
import { createStructuredSelector } from "reselect"
import { selectIsFetching } from "../../redux/shop/shop.selectors"
import SignInPage from "./SignInPage.component"
import { withSpinner } from '../../components/with-spinner/withSpinner.HOC'


const mapStateToProps = createStructuredSelector({
   isLoading: selectIsFetching,
})

const SignInContainer = compose(
   connect(mapStateToProps),
   withSpinner,
)(SignInPage)

export default SignInContainer