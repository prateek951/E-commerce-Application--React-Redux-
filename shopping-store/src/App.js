import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
// Page components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import RegisterLoginFormPage from './pages/login-and-register/login-and-register.component';
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={RegisterLoginFormPage} />
      </Switch>
    </div>
  );
}

export default App;
