import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles'
import { connect } from 'react-redux';
import { selectIsFetching } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector({
   isLoading: selectIsFetching
})


export const withSpinner = ComponentToWrap => {

   const Spinner = ({ isLoading, ...otherProps }) => {
      return isLoading ?
         <SpinnerOverlay>
            <SpinnerContainer />
         </SpinnerOverlay> :
         <ComponentToWrap {...otherProps} />
   }
   return connect(mapStateToProps)(Spinner)
}