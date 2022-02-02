import React, { useEffect } from 'react'
import './App.css';
import Homepage from './pages/homepage/Homepage.component';
import { Route, Routes, Navigate } from 'react-router-dom'
import ShopPage from './pages/shopPage/ShopPage.component';
import Header from './components/header/Header.component';
import ContactPage from './pages/contactPage/ContactPage.component';
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from './redux/user/user.selectors';
import Checkout from './pages/checkoutPage/Checkout.component';
import { checkUserAuth } from './redux/user/user.actions';
import SignInContainer from './pages/signInPage/SignInPageContainer.component';
import NotFoundPage from './pages/notFoundPage/notFoundPage';
import CollectionOverview from './components/collection-overview/CollectionsOverview.component';
import CollectionPage from './pages/collectionPage/CollectionPage.component';
import { collectionsFetchingStart } from './redux/shop/shop.actions';



const App = () => {
  const currentUser = useSelector(selectCurrentUser) //Replacing mapStateToProps
  const dispatch = useDispatch() // Replacing mapDispatchToProps


  useEffect(() => {
    dispatch(checkUserAuth())
  }, [dispatch])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/shop/*' element={<ShopPage />}>
          <Route index element={<CollectionOverview />} />
          <Route path=':collectionId' element={<CollectionPage />} />
        </Route>
        <Route path='/signin' element={currentUser ? <Navigate to='/' /> : <SignInContainer />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App