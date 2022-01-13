import cartTypes from "./cart.types";
import { addNewItemUtil } from "./cart.utils";

const INITIAL_STATE = {
   hidden: true,
   cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case cartTypes.toggleCartDropdown:
         return {
            ...state,
            hidden: !state.hidden,
         }
      case cartTypes.addItem:
         return {
            ...state,
            cartItems: addNewItemUtil(state.cartItems, action.payload)
         }
      default:
         return state
   }
}