import React from 'react'
import './App.css';
import Homepage from './pages/homepage/Homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom'
import ShopPage from './pages/shopPage/ShopPage.component';
import Header from './components/header/Header.component';
import SignInPage from './pages/signInPage/SignInPage.component';
import ContactPage from './pages/contactPage/ContactPage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUserAC } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import Checkout from './pages/checkoutPage/Checkout.component';



class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); //getting userRef from createUserProfileDocument's return
        userRef.onSnapshot(snapShot => { //onSnapShot() = refObj.get() - getting snapshotObject (for info)
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(), // spreading the rest of data (email, displayName, etc.) 
          })
        }
        )
      } else setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => (this.props.currentUser ? <Redirect to='/' /> : <SignInPage />)} />
          <Route path='/contact' component={ContactPage} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUserAC(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);