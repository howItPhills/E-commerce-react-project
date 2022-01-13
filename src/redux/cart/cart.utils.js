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