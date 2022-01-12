import { actionTypes } from './user.types'

export const setCurrentUserAC = user => ({
   type: actionTypes.setCurrentUser,
   payload: user
})