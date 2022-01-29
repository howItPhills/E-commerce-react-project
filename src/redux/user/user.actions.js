import { userActionTypes } from './user.types'

export const googleSignInStart = () => ({
   type: userActionTypes.GOOGLE_SIGNIN_START,
})
export const emailSignInStart = (emailAndPassword) => ({
   type: userActionTypes.EMAIL_SIGNIN_START,
   payload: emailAndPassword,
})
export const signInSuccess = user => ({
   type: userActionTypes.SIGN_IN_SUCCESS,
   payload: user,
})
export const signInFailure = errorMessage => ({
   type: userActionTypes.SIGN_IN_FAILURE,
   payload: errorMessage,
})
export const checkUserAuth = () => ({
   type: userActionTypes.CHECK_USER_AUTH,
})
export const signOutStart = () => ({
   type: userActionTypes.SIGN_OUT_START,
})
export const signOutSuccess = () => ({
   type: userActionTypes.SIGN_OUT_SUCCESS,
})
export const signOutFailure = () => ({
   type: userActionTypes.SIGN_OUT_FAILURE,
})
export const signUpStart = nameEmailAndPassword => ({
   type: userActionTypes.SIGN_UP_START,
   payload: nameEmailAndPassword,
})
export const signUpSuccess = user => ({
   type: userActionTypes.SIGN_UP_SUCCESS,
   payload: user
})
export const signUpFailure = errorMessage => ({
   type: userActionTypes.SIGN_UP_FAILURE,
   payload: errorMessage
})