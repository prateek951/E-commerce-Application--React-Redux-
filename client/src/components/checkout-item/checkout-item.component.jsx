import React from 'react';
import { connect } from 'react-redux';
import {
  removeCartItem,
  addItem,
  decreaseCartItemQuantity
} from '../../redux/cart-item/cart-item.actions';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, dispatch }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer className="name">{name}</TextContainer>
      <QuantityContainer>
        <div
          className="arrow"
          onClick={() => dispatch(decreaseCartItemQuantity(cartItem))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer
        className="remove-button"
        onClick={() => dispatch(removeCartItem(cartItem))}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default connect(null)(CheckoutItem);
