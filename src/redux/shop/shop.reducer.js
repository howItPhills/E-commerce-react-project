import shopData from './shop-data'

const INITIAL_STATE = {
   collections: shopData,
}


export const shopReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      default:
         return state
   }
}