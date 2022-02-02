import { all, call, put, takeLatest } from 'redux-saga/effects';

import { firestore } from '../../firebase/firebase.utils';
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { collectionsFetchingSuccessful } from '../../redux/shop/shop.actions'
import { collectionsFetchingFailure } from '../../redux/shop/shop.actions'

import { shopActionTypes } from './shop.types';



// MAIN SAGAS
function* fetchCollectionsAsync() {
   try {
      const collectionRef = yield firestore.collection('collections');
      const snapshot = yield collectionRef.get()
      const collections = yield call(convertCollectionsSnapshotToMap, snapshot)
      yield put(collectionsFetchingSuccessful(collections))
   } catch (error) {
      yield put(collectionsFetchingFailure(error.message))
   }
}


// SAGAS-LISTENERS
function* fetchCollectionsStart() {
   yield takeLatest(shopActionTypes.COLLECTIONS_FETCHING_START, fetchCollectionsAsync)
}

// COMBINER

export function* shopSagas() {
   yield all([
      call(fetchCollectionsStart)
   ])
}