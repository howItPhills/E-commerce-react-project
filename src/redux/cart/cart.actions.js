import cartTypes from './cart.types'

export const toggleCartDropdownAC = () => ({
   type: cartTypes.toggleCartDropdown,
}
)

export const addItem = item => ({
   type: cartTypes.addItem,
   payload: item,
})