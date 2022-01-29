import cartTypes from './cart.types'

export const toggleCartDropdown = () => ({
   type: cartTypes.TOGGLE_CART_DROPDOWN,
}
)

export const addItem = item => ({
   type: cartTypes.ADD_ITEM,
   payload: item,
})

export const removeItem = item => ({
   type: cartTypes.REMOVE_ITEM,
   payload: item,
})


export const clearItemFromCart = item => ({
   type: cartTypes.CLEAR_ITEM_FROM_CART,
   payload: item,
})
export const clearCartOnSignOut = () => ({
   type: cartTypes.CLEAR_CART_ON_SIGN_OUT,
})