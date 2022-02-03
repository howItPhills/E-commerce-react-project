import { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserAuth } from './redux/user/user.actions';

import './App.css';

import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shopPage/ShopPage.component';
import Header from './components/header/Header.component';
import ContactPage from './pages/contactPage/ContactPage.component';
import Checkout from './pages/checkoutPage/Checkout.component';
import NotFoundPage from './pages/notFoundPage/notFoundPage';
import CollectionOverview from './components/collection-overview/CollectionsOverview.component';
import CollectionPage from './pages/collectionPage/CollectionPage.component';
import SignInPage from './pages/signInPage/SignInPage.component';
import Layout from './components/layout/Layout.component';



const App = () => {
  const currentUser = useSelector(selectCurrentUser) //Replacing mapStateToProps
  const dispatch = useDispatch() // Replacing mapDispatchToProps


  useEffect(() => {
    dispatch(checkUserAuth())
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='shop/*' element={<ShopPage />}>
          <Route index element={<CollectionOverview />} />
          <Route path=':collectionId' element={<CollectionPage />} />
        </Route>
        <Route path='signin' element={currentUser ? <Navigate to='/' /> : <SignInPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App