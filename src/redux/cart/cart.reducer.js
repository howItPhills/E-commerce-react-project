import cartTypes from "./cart.types";
import { addNewItemUtil, removeItemUtil } from "./cart.utils";

const INITIAL_STATE = {
   hidden: true,
   cartItems: [],
}

export const cartReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case cartTypes.TOGGLE_CART_DROPDOWN:
         return {
            ...state,
            hidden: !state.hidden,
         }
      case cartTypes.ADD_ITEM:
         return {
            ...state,
            cartItems: addNewItemUtil(state.cartItems, action.payload)
         }
      case cartTypes.REMOVE_ITEM:
         return {
            ...state,
            cartItems: removeItemUtil(state.cartItems, action.payload)
         }
      case cartTypes.CLEAR_ITEM_FROM_CART:
         return {
            ...state,
            cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
         }
      case cartTypes.CLEAR_CART_ON_SIGN_OUT:
         return {
            ...state,
            cartItems: []
         }
      default:
         return state
   }
}