import { shopActionTypes } from './shop.types'

const INITIAL_STATE = {
   collections: null,
   isFetching: false,
   errorMessage: '',
}


export const shopReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case shopActionTypes.COLLECTIONS_FETCHING_START:
         return {
            ...state,
            isFetching: true,
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