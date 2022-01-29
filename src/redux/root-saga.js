import { all, call } from 'redux-saga/effects';
import { shopSagas } from './../redux/shop/shop.sagas'
import { cartSagas } from './cart/cart.sagas';
import { userSagas } from './user/user.sagas';



export function* rootSaga() {
   yield all([
      call(userSagas),
      call(cartSagas),
      call(shopSagas),
   ])
}