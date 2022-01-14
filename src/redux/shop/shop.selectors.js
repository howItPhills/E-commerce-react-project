import { createSelector } from "reselect";

const selectShopPage = state => state.shop;

export const selectShopPageCollections = createSelector(
   [selectShopPage],
   shop => shop.collections
)

const MAP_STRING_TO_NUMBER = { //this object helps to convert collectionId from (match.params.collectionId) from string to number 
   hats: 1,
   sneakers: 2,
   jackets: 3,
   womens: 4,
   mens: 5,
}


export const selectCollection = collectionId => createSelector(
   [selectShopPageCollections],
   collections => collections.find(
      collection => collection.id === MAP_STRING_TO_NUMBER[collectionId]
      //MAP_STRING_TO_NUMBER[collectionId] equals to the each number in map-object (when collectionId is a string)
   )
)
