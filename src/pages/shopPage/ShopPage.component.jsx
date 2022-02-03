import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { collectionsFetchingStart } from '../../redux/shop/shop.actions';


const ShopPage = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(collectionsFetchingStart())
   })

   return (
      <div className='shop-page'>
         <Outlet />
      </div>
   )
}

export default ShopPage