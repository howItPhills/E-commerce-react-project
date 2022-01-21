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

export const selectCollection = collectionId => createSelector(
   [selectShopPageCollections],
   collections => collections ? collections[collectionId] : null // DATA NORMALIZATION : we converted collections from array to object for easier search for the item we need (by collectionId, which is a string value from URL) instead of iterating through whole array using find method (low perfrmance with large arrays)
)

export const selectIsFetching = createSelector(
   [selectShopPage],
   shop => shop.isFetching
)
export const selectIsCollectionsFetching = createSelector(
   [selectShopPageCollections],
   collections => !!collections
)