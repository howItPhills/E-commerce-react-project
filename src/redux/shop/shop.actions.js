import { shopActionTypes } from "./shop.types";

export const collectionsFetchingStart = () => ({
   type: shopActionTypes.COLLECTIONS_FETCHING_START,
})
export const collectionsFetchingSuccessful = (collections) => ({
   type: shopActionTypes.COLLECTIONS_FETCHING_SUCCESSFUL,
   payload: collections,
})

export const collectionsFetchingFailure = (errorMessage) => ({
   type: shopActionTypes.COLLECTIONS_FETCHING_FAILURE,
   payload: errorMessage,
})



//THUNK

// export const collectionsFetchingAsync = () => {
//    return dispatch => {
//       const collectionRef = firestore.collection('collections');
//       dispatch(collectionsFetchingStart())
//       collectionRef.get()
//          .then(snapshot => {
//             const collections = convertCollectionsSnapshotToMap(snapshot)
//             dispatch(collectionsFetchingSuccessful(collections))
//          }).catch(error => dispatch(collectionsFetchingFailure(error.message)))
//    }
// }