import { takeLatest, put, call, all } from "redux-saga/effects";
import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from "../../firebase/firebase.utils";
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from "./user.actions";
import { userActionTypes } from "./user.types";


// UTIL-FUNCTIONS
function* onGettingUserSnapshot(userAuth, additionalData) {
   try {
      const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
      const userSnapshot = yield userRef.get()
      yield put(signInSuccess({
         id: userSnapshot.id,
         ...userSnapshot.data()
      }))
   } catch (error) {
      yield put(signInFailure(error.message))
   }
}

// MAIN SAGAS
function* onGoogleSignIn() {
   try {
      const { user } = yield auth.signInWithPopup(googleProvider)
      yield onGettingUserSnapshot(user)
   } catch (error) {
      yield put(signInFailure(error.message))
   }
}
function* onEmailSignIn({ payload: { email, password } }) {
   try {
      const { user } = yield auth.signInWithEmailAndPassword(email, password)
      yield onGettingUserSnapshot(user);
   } catch (error) {
      yield put(signInFailure(error.message))
   }
}

function* isUserAuthenticated() {
   try {
      const userAuth = yield getCurrentUser();
      if (!userAuth) return;
      yield onGettingUserSnapshot(userAuth)
   } catch (error) {
      yield put(signInFailure(error.message))
   }
}

function* onUserSignOut() {
   try {
      yield auth.signOut()
      yield put(signOutSuccess())
   } catch (error) {
      yield put(signOutFailure(error.message))
   }
}

function* onUserSignUp({ payload: { displayName, email, password } }) {
   try {
      const { user } = yield auth.createUserWithEmailAndPassword(email, password);
      yield put(signUpSuccess({ user, displayName }))
   } catch (error) {
      yield put(signUpFailure(error.message))
   }
}

function* signInAfterSignUp({ payload: { user, displayName } }) {
   yield onGettingUserSnapshot(user, { displayName })
}

// SAGAS-LISTENERS
function* onGoogleSignInStart() {
   yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, onGoogleSignIn)
}

function* onEmailSignInStart() {
   yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, onEmailSignIn)
}
function* onUserAuthCheck() {
   yield takeLatest(userActionTypes.CHECK_USER_AUTH, isUserAuthenticated)
}
function* onUserSignOutStart() {
   yield takeLatest(userActionTypes.SIGN_OUT_START, onUserSignOut)
}
function* onUserSignUpStart() {
   yield takeLatest(userActionTypes.SIGN_UP_START, onUserSignUp)
}
function* onUserSignUpSuccess() {
   yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}


// COMBINER
export function* userSagas() {
   yield all([
      call(onEmailSignInStart),
      call(onGoogleSignInStart),
      call(onUserAuthCheck),
      call(onUserSignOutStart),
      call(onUserSignUpStart),
      call(onUserSignUpSuccess),
   ])
}