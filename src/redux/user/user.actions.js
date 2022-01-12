import { actionTypes } from '../action-types'

export const setCurrentUserAC = user => ({
   type: actionTypes.setCurrentUser,
   payload: user
})