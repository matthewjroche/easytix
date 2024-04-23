// In a file called eventModel.js

// import { NextResponse } from "next/server";

// import mongoose from "mongoose";

// // Define the event schema
// const eventSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   genre: { type: String, required: true },
//   date: { type: Date, required: true },
//   location: { type: String, required: true },
//   image: { type: String, required: true },
//   standardTickets: { type: Number, required: true },
//   vipTickets: { type: Number, required: true },
// });

// // Define the Event model
// let Event;
// try {
//   Event = mongoose.model("Event");
// } catch {
//   Event = mongoose.model("Event", eventSchema);
// }

// export default Event;

// export async function GET(req, res) {
//   try {
//     // logic to fetch events from the database goes here
//     const events = await fetchEventsFromDatabase();

//     // Send the events as a response
//     res.status(200).json(events);
//   } catch (error) {
//     console.error("Error fetching events:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// export async function POST(req, res) {
//   try {
//     // Parse the body data
//     const { title, description, genre, date, location, standardTickets, vipTickets } = req.body;

//     // Create a new event instance using the Event model
//     const newEvent = new Event({
//       title,
//       description,
//       genre,
//       date: new Date(date), // Ensure the date is correctly formatted as a Date object
//       location,
//       standardTickets,
//       vipTickets
//     });

//     // Save the new event to the database
//     await newEvent.save();

//     // Send a success response
//     console.log("New event created:", newEvent);
//     res.status(201).json({ message: "Event created successfully", eventId: newEvent._id });
//   } catch (error) {
//     console.error("Error creating event:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// export async function PUT(req, res) {
//   try {
//     //  logic to update an existing event in the database goes here
//     console.log("PUT req test");

//     // Send a success response
//     res.status(200).json({ message: "Event updated successfully" });
//   } catch (error) {
//     console.error("Error updating event:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// export async function DELETE(req, res) {
//   try {
//     // Your logic to delete an existing event from the database goes here
//     console.log("DELETE req test");

//     // Send a success response
//     res.status(200).json({ message: "Event deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting event:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// pages/api/events/create.js

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//       // Only POST method is allowed, reject all other methods
//       res.setHeader('Allow', ['POST']);
//       return res.status(405).end(`Method ${req.method} Not Allowed`);
//   }

//   try {
//       const data = req.body;  // Here you would typically add database handling logic
//       console.log(data);  // Log the received data for debugging

//       // Simulate event creation and send a success response
//       res.status(201).json({ message: 'Event created successfully', data });
//   } catch (error) {
//       // If something goes wrong, send a server error status
//       res.status(500).json({ message: 'Failed to create the event', error: error.message });
//   }
// }

// pages/api/events.js
// import { NextApiResponse } from "next";
// import mongoose from "mongoose";
// import { nextConnect } from "next-connect";

// const handler = nextConnect();

// // MongoDB connection logic
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const eventSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   genre: { type: String, required: true },
//   date: { type: Date, required: true },
//   location: { type: String, required: true },
//   standardTickets: { type: Number, required: true },
//   vipTickets: { type: Number, required: true },
// });

// const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

// // POST - Create a new event
// handler.post(async (req, res) => {
//   try {
//     const event = new Event(req.body);
//     await event.save();
//     res
//       .status(201)
//       .json({ message: "Event created successfully", eventId: event._id });
//   } catch (error) {
//     console.error("Error creating event:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // GET - Retrieve all events
// handler.get(async (req, res) => {
//   try {
//     const events = await Event.find({});
//     res.status(200).json(events);
//   } catch (error) {
//     console.error("Error fetching events:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // PUT - Update an existing event
// handler.put(async (req, res) => {
//   const { id } = req.query;
//   try {
//     const updatedEvent = await Event.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     if (!updatedEvent) {
//       return res.status(404).json({ error: "Event not found" });
//     }
//     res
//       .status(200)
//       .json({ message: "Event updated successfully", updatedEvent });
//   } catch (error) {
//     console.error("Error updating event:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // DELETE - Delete an event
// handler.delete(async (req, res) => {
//   const { id } = req.query;
//   try {
//     const deletedEvent = await Event.findByIdAndDelete(id);
//     if (!deletedEvent) {
//       return res.status(404).json({ error: "Event not found" });
//     }
//     res.status(200).json({ message: "Event deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting event:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// export default handler;

import Event from "@/app/models/Event";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const eventData = body.formData;
    await Event.create(eventData);

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const events = await Event.find();
    return NextResponse.json({ events }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
