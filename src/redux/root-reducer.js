import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import userReducer from './user/user.reducer'
import storage from "redux-persist/lib/storage";
import { directoryReducer } from "./directory/directory.reducer";
import { shopReducer } from "./shop/shop.reducer";

const rootReducer = combineReducers({
   user: userReducer,
   cart: cartReducer,
   directory: directoryReducer,
   shop: shopReducer,
})

const storageConfig = {
   key: 'root',
   storage,
   whitelist: ['cart']
}

export default persistReducer(storageConfig, rootReducer) 