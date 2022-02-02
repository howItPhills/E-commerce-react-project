import React, { useEffect, useLayoutEffect } from 'react';

import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { collectionsFetchingStart } from '../../redux/shop/shop.actions';


const ShopPage = () => {
   const dispatch = useDispatch();
   useLayoutEffect(() => {
      dispatch(collectionsFetchingStart())
   })

   return (
      <div className='shop-page'>
         <Outlet />
      </div>
   )
}

export default ShopPage