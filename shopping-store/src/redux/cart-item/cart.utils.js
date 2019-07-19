export const addItemToCart = (cartItems, cartItemToAdd) => {
  const isExistingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (isExistingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
};
