import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles'


export const withSpinner = ComponentToWrap => ({ isLoading, ...otherProps }) => {
   return isLoading ?
      <SpinnerOverlay>
         <SpinnerContainer />
      </SpinnerOverlay> :
      <ComponentToWrap {...otherProps} />
}