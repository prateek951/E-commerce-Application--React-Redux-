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

export const decreaseQuantityOfCartItemAndRemove = (
  cartItems,
  itemToLessen
) => {
  // 1. Check for the cart item quantity
  // 2.If the cart item quantity is more than 1 simple decrement it by 1 else if it is 1 remove the cart item simply
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToLessen.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToLessen.id);
  }
  return cartItems.map(cartItem =>
    cartItem.id === itemToLessen.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
