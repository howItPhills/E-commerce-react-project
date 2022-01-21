import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import CartIcon from './CartIcon.component';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';


const mapStateToProps = createStructuredSelector({
   itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
   toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

const CartIconContainer = compose(
   connect(mapStateToProps, mapDispatchToProps),
)(CartIcon)

export default CartIconContainer