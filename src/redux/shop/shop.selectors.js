import { createSelector } from "reselect";

const selectShopPage = state => state.shop;

export const selectShopPageCollections = createSelector(
   [selectShopPage],
   shop => shop.collections
)

export const selectShopPageCollectionsArray = createSelector(
   [selectShopPageCollections],
   collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

// const MAP_STRING_TO_NUMBER = { //this object helps to convert collectionId from (match.params.collectionId) from string to number 
//    hats: 1,
//    sneakers: 2,
//    jackets: 3,
//    womens: 4,
//    mens: 5,
// }


// export const selectCollection = collectionId => createSelector(
//    [selectShopPageCollections],
//    collections => collections.find(
//       collection => collection.id === MAP_STRING_TO_NUMBER[collectionId]
//       //MAP_STRING_TO_NUMBER[collectionId] equals to the each number in map-object (when collectionId is a string)
//    )
// )


export const selectCollection = collectionId => createSelector(
   [selectShopPageCollections],
   collections => collections ? collections[collectionId] : null // DATA NORMALIZATION : we converted collections from array to object for easier search for the item we need (by collectionId, which is a string value from URL) instead of iterating through whole array using find method (low perfrmance with large arrays)
)