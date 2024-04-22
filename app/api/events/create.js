// pages/api/events/create.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        // Only POST method is allowed, reject all other methods
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    try {
        const data = req.body;  // Here you would typically add database handling logic
        console.log(data);  // Log the received data for debugging

        // Simulate event creation and send a success response
        res.status(201).json({ message: 'Event created successfully', data });
    } catch (error) {
        // If something goes wrong, send a server error status
        res.status(500).json({ message: 'Failed to create the event', error: error.message });
    }
}
