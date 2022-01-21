import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles'


export const withSpinner = ComponentToWrap => {
   const Spinner = ({ isLoading, ...otherProps }) => {
      return isLoading ?
         <SpinnerOverlay>
            <SpinnerContainer />
         </SpinnerOverlay> :
         <ComponentToWrap {...otherProps} />
   }
   return Spinner
}