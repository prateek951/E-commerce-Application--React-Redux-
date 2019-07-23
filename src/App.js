import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
// Page components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import RegisterLoginFormPage from './pages/login-and-register/login-and-register.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout.component';
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          // console.log(snapshot.data());
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <RegisterLoginFormPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentUser: user => {
    dispatch(setCurrentUser(user));
  }
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);