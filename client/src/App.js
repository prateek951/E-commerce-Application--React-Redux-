import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
// Page components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import RegisterLoginFormPage from './pages/login-and-register/login-and-register.component';

import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout.component';
import { GlobalStyle } from './global.styles';

// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
const App = ({ checkUserSession, currentUser }) => {
  // unsubscribeFromAuth = null;

  // componentDidMount() {
  // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);
  //     userRef.onSnapshot(snapshot => {
  //       // console.log(snapshot.data());
  //       setCurrentUser({
  //         id: snapshot.id,
  //         ...snapshot.data()
  //       });
  //     });
  //   }
  //   // Once the user signs out set the current user to null
  //   setCurrentUser(userAuth);
  //   /**
  //    * This code can be used in any project with little tweaks to
  //    * add values to the firestore.
  //    */
  //   // TEMPORARY CODE TO ADD COLLECTIONS TO OUR FIREBASE (NOT REQUIRED FOR PRODUCTION)
  //   // addCollectionAndDocuments(
  //   //   'collections',
  //   //   collectionsArray.map(({ title, items }) => ({ title, items }))
  //   // );
  // });
  // }
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }
  return (
    <div>
      <GlobalStyle />
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
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    checkUserSession: () => {
      dispatch(checkUserSession());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
