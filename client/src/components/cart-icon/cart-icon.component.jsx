import React from 'react';
import { connect } from 'react-redux';
import { toggleDropdown } from '../../redux/cart-item/cart-item.actions';
import { selectCartItemsCount } from '../../redux/cart-item/cart.selectors';
import { createStructuredSelector } from 'reselect';
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';
const CartIcon = ({ toggleDropdown, itemsCount }) => {
  return (
    <CartContainer onClick={() => toggleDropdown()}>
      <ShoppingIcon />
      <ItemCountContainer>{itemsCount}</ItemCountContainer>
    </CartContainer>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleDropdown: () => {
      dispatch(toggleDropdown());
    }
  };
};

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
