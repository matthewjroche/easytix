import React from 'react';
import {ExpressCheckoutElement} from '@stripe/react-stripe-js';

const CheckoutPage = () => {
  return (
    <div id="checkout-page">
      <ExpressCheckoutElement onConfirm={onConfirm} />
    </div>
  );
};