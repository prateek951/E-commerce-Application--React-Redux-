import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleDropdown } from '../../redux/cart-item/cart-item.actions';
import { selectCartItemsCount } from '../../redux/cart-item/cart.selectors';
const CartIcon = ({ toggleDropdown, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={() => toggleDropdown()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
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

const mapStateToProps = state => ({
  itemsCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
