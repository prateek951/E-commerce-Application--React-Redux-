import React from 'react';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <div key={cartItem.id}>
            <h1>
              {cartItem.name} | {cartItem.price}
            </h1>
          </div>
        ))}
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(
  mapStateToProps,
  {}
)(CartDropdown);
