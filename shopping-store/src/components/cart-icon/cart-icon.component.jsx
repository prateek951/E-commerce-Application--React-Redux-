import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleDropdown } from '../../redux/cart-item/cart-item.actions';
const CartIcon = ({ toggleDropdown }) => {
  return (
    <div className="cart-icon" onClick={() => toggleDropdown()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleDropdown: () => {
      dispatch(toggleDropdown());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
