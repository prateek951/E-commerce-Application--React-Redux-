import React from 'react';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart-item/cart.selectors';
import { toggleDropdown } from '../../redux/cart-item/cart-item.actions';
import './cart-dropdown.styles.scss';
const CartDropdown = ({ dispatch, cartItems, history }) => {
  const onMoveToCheckout = () => {
    dispatch(toggleDropdown());
    history.push('/checkout');
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 &&
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        {(cartItems.length === 0 || !cartItems) && (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={onMoveToCheckout}>Checkout</Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(CartDropdown)
);
