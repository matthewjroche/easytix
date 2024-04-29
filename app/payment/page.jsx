"use client";

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

// import CheckoutPage from '../components/CheckoutPage';

// // Make sure to call `loadStripe` outside of a component's render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_51PAuX1HAKnz3jX2Lv7XlDuYI26GXGnzmGeaVlIz1Hx09Ozhhldyqf7Fhz4gDpVcHDfvIloF6VW7D8V7zT5X7h6aN00YCLUAhXZ');

// function App() {
//   const options = {
//     mode: 'payment',
//     amount: 1099,
//     currency: 'usd',
//     // Customizable with appearance API.
//     appearance: {/*...*/},
//   };

//   return (
//     <Elements stripe={stripePromise} options={options}>
//       <CheckoutPage />
//     </Elements>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));

import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutPage from "../components/CheckoutPage"; // Assuming CheckoutPage is in the components folder

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.

export default function Payment() {
  const stripePromise = loadStripe(
    "pk_test_51PAuX1HAKnz3jX2Lv7XlDuYI26GXGnzmGeaVlIz1Hx09Ozhhldyqf7Fhz4gDpVcHDfvIloF6VW7D8V7zT5X7h6aN00YCLUAhXZ"
  );

  const options = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
    // Customizable with appearance API.
    appearance: {
      /*...*/
    },
  };
  return (
    // <Elements stripe={stripePromise} options={options}>
    //   <CheckoutPage />
    // </Elements>
    <Elements stripe={stripePromise} options={options}>
        <CheckoutPage/>
    </Elements>

  );
}

