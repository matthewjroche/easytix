import mongoose from "mongoose";
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

// Define the schema for the "Event"
const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      // required: [true, "The event title is required"],
      trim: true,
    },
    description: {
      type: String,
      // required: [true, "The event description is required"],
      trim: true,
    },
    genre: {
      type: String,
      // required: [true, "The event genre is required"],
      trim: true,
    },
    date: {
      type: Date,
      // required: [true, "The event date is required"],
    },
    location: {
      type: String,
      // required: [true, "The event location is required"],
      trim: true,
    },
    // image: {
    //   type: String, // URL to the image file
    //   required: false,
    // },
    standardTickets: {
      type: Number,
      // required: [true, "The number of standard tickets is required"],
      min: [0, "Negative ticket numbers are not allowed"],
    },
    vipTickets: {
      type: Number,
      // required: [true, "The number of VIP tickets is required"],
      min: [0, "Negative ticket numbers are not allowed"],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

// Prevent Mongoose from creating multiple models in case of repeated imports
// const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
export default Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
