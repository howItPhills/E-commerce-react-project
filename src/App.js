import React from 'react'
import './App.css';
import Homepage from './pages/homepage/Homepage.component';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shopPage/ShopPage.component';
import Header from './components/header/Header.component';
import SignInPage from './pages/signInPage/SignInPage.component';
import ContactPage from './pages/contactPage/ContactPage.component';
import { auth } from './firebase/firebase.utils'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInPage} />
          <Route exact path='/contact' component={ContactPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
