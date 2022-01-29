import React from 'react'
import './App.css';
import Homepage from './pages/homepage/Homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom'
import ShopPage from './pages/shopPage/ShopPage.component';
import Header from './components/header/Header.component';
import ContactPage from './pages/contactPage/ContactPage.component';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import Checkout from './pages/checkoutPage/Checkout.component';
import { checkUserAuth } from './redux/user/user.actions';
import SignInContainer from './pages/signInPage/SignInPageContainer.component';



class App extends React.Component {
  componentDidMount() {
    const { checkUserAuth } = this.props
    checkUserAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => (this.props.currentUser ? <Redirect to='/' /> : <SignInContainer />)} />
          <Route path='/contact' component={ContactPage} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserAuth: () => dispatch(checkUserAuth())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);