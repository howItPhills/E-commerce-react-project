export const addNewItemUtil = (cartItems, newCartItem) => {
   const existingCartItem = cartItems.find(item => item.id === newCartItem.id)

   if (existingCartItem) {
      return cartItems.map(cartItem => cartItem.id === newCartItem.id ?
         { ...cartItem, quantity: cartItem.quantity + 1 } :
         cartItem
      )
   }
   return [...cartItems, { ...newCartItem, quantity: 1 }] // returning new array with prev cartItem but with new item : destructuring newCartItem props and adding new prop - quantity
};

export const removeItemUtil = (cartItems, cartItemToRemove) => {
   const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

   if (existingItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
   } else {
      return cartItems.map(item => item.id === cartItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item)
   }
}