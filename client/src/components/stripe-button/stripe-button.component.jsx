import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  //Value is required in cents
  const priceForStripe = price * 100;
  const PUBLISHABLE_KEY = 'pk_test_cyHNtVhVecID87etDUNyudcO';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment Successful');
    }).catch(error => {
      console.log('Payment error : ' + JSON.parse(error));
      alert(`There was an issue with your payment. Please 
      make sure you use the provided credit card`)
    });

  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Belantos Shopping Centre"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total Price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={PUBLISHABLE_KEY}
    />
  );
};

export default StripeCheckoutButton;
