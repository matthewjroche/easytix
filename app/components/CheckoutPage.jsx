// "use client"
// import React from 'react';
// import {ExpressCheckoutElement} from '@stripe/react-stripe-js';

// const CheckoutPage = () => {
//   return (
//     <div id="checkout-page">
//       <ExpressCheckoutElement onConfirm={onConfirm} />
//     </div>
//   );
// };

// import React from 'react';
// import { ExpressCheckoutElement } from '@stripe/react-stripe-js';

// const CheckoutPage = () => {
//   // Define the onConfirm function to handle the confirmation event
//   const onConfirm = (event) => {
//     // Handle the confirmation logic here
//     console.log("Payment confirmed:", event);
//   };

//   return (
//     <div id="checkout-page">
//       <ExpressCheckoutElement onConfirm={onConfirm} />
//     </div>
//   );
// };

// export default CheckoutPage;


import React, { useState } from 'react';
import { useStripe, useElements, ExpressCheckoutElement } from '@stripe/react-stripe-js';

const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState('');

  const onConfirm = async (event) => {
    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet or `elements` is not initialized.
      // Make sure to disable form submission until Stripe.js has loaded and elements are initialized.
      return;
    }

    // Simulate a form submission
    const {error: submitError} = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret
    const res = await fetch('/api/create-intent', {
      method: 'POST',
    });
    const { client_secret: clientSecret } = await res.json();

    if (clientSecret) {
      // Confirm the PaymentIntent using the details collected by the Express Checkout Element
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: 'https://example.com/order/123/complete',
        },
      });

      if (error) {
        setErrorMessage(error.message);
      } else {
        // The payment UI automatically closes with a success animation.
        // Your customer is redirected to your `return_url`.
      }
    } else {
      setErrorMessage('Failed to create payment intent.');
    }
  };

  return (
    <div id="checkout-page">
      <ExpressCheckoutElement onConfirm={onConfirm} />
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  );
};

export default CheckoutPage;

