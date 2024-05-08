const stripe = require('stripe')('sk_test_51PAuX1HAKnz3jX2Lfrf23SRwcgbuK22xIx8rTVtfppoD9HFWgLVSxzOuXAjuCYXqVzJcpI1RRsXWEZlVPDbYhBiA00N4TmClUJ');

const session = await stripe.checkout.sessions.create({
  success_url: 'https://example.com/success',
  line_items: [
    {
      price: 'price_1MotwRLkdIwHu7ixYcPLm5uZ',
      quantity: 2,
    },
  ],
  mode: 'payment',
});