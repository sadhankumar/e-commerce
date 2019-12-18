import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_CXkmJ4cc7Ap4BZJDGLDH8R3A00fs1ubI6N';

 const  onToken = token => {
    console.log(token);
    alert('payment Done Thank YOU');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='SMK Clothing Ltd.'
      billingAddress
      shippingAddress
      image='http://smkbikes.com/img/logo.jpeg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='PAY NOW'
      token={onToken}
      stripeKey = {publishableKey} />
  );
};

export default StripeCheckoutButton;
