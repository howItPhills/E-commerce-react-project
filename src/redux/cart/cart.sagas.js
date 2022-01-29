import { takeLatest, put, call, all } from "redux-saga/effects";
import { userActionTypes } from "../user/user.types";
import { clearCartOnSignOut } from './cart.actions'



// MAIN SAGAS
function* clearCart() {
   yield put(clearCartOnSignOut())
}

// SAGAS-LISTENERS

function* clearCartOnSignOutSuccess() {
   yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCart)
}

//COMBINER

export function* cartSagas() {
   yield all([
      call(clearCartOnSignOutSuccess)
   ])
}