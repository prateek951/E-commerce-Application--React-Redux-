import React from 'react';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart-item/cart.selectors';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 &&
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        {(cartItems.length === 0 || !cartItems) && 'Your cart is empty'}
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(
  mapStateToProps,
  {}
)(CartDropdown);
