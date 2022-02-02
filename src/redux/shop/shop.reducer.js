import { shopActionTypes } from './shop.types'
import { userActionTypes } from './../user/user.types'


const INITIAL_STATE = {
   collections: null,
   isFetching: false,
   errorMessage: '',
}


export const shopReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case shopActionTypes.COLLECTIONS_FETCHING_START:
      case userActionTypes.EMAIL_SIGNIN_START:
      case userActionTypes.SIGN_UP_START:
         return {
            ...state,
            isFetching: true,
         }
      case userActionTypes.SIGN_IN_SUCCESS:
      case userActionTypes.SIGN_IN_FAILURE:
         return {
            ...state,
            isFetching: false
         }
      case shopActionTypes.COLLECTIONS_FETCHING_SUCCESSFUL:
         return {
            ...state,
            collections: action.payload,
            isFetching: false,
         }
      case shopActionTypes.COLLECTIONS_FETCHING_FAILURE:
         return {
            ...state,
            errorMessage: action.payload
         }

      default:
         return state
   }
}