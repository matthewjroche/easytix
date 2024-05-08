// pages/api/create-payment-link.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { eventId } = req.body;

            // Assume you fetch event details from your database
            const event = await getEventDetails(eventId);

            // Create a payment link for the event
            const paymentLink = await stripe.paymentLinks.create({
                line_items: [{
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: event.title,
                            description: event.description,
                            images: [event.image],
                        },
                        unit_amount: event.price,  // Assuming event price is in cents
                    },
                    quantity: 1,
                }],
                metadata: {
                    eventId: eventId,
                },
                after_completion: {
                    type: 'redirect',
                    redirect: {
                        url: `http://localhost:3000/events/${eventId}/success`,  // Redirect after payment
                    },
                },
            });

            res.status(200).json({ url: paymentLink.url });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

// Assume a function to fetch event details
async function getEventDetails(eventId) {
    // Fetch event from your database
    return {
        title: "Example Event",
        description: "This is an example event.",
        image: "https://example.com/image.png",
        price: 2000, // Price in cents
    };
}
