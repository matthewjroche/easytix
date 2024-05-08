// // app/api/events/route.js
// import { NextResponse } from "next/server";
// import dbConnect from "../../lib/dbConnect";
// import Event from "../../models/Event";

// // Export with uppercase method name
// export async function POST() {
//   await dbConnect();

//   try {
//     const newEvent = new Event(req.body);
//     await newEvent.save();
//     console.log("event success")

//     return new Response("201 success", {
//       status: 201,
//     });
//   } catch (error) {
//     console.log("oops")
//     return new Response("500 fail", {
//       status: 500,
//     });
//   }
// }

// pages/api/events.js
import dbConnect from "../../lib/dbConnect"; // Ensure this path is correct
import Event from "../../models/Event"; // Ensure this path and model are correctly defined

export async function POST(req, res) {
  await dbConnect();

  try {
    // Parse the JSON body of the request
    const {
      title,
      description,
      genre,
      date,
      location,
      standardTickets,
      vipTickets,
    } = req.body;

    // Create a new event document
    const newEvent = new Event({
      title,
      description,
      genre,
      date, // Ensure date is correctly formatted for MongoDB
      location,
      standardTickets, // Convert to number
      vipTickets, // Convert to number
    });

    // Save the event to the database
    const savedEvent = await newEvent.save();
    console.log("SUCCESS")
    return new Response("201 success", {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return new Response("500 fail", {
      status: 500,
    });

    // Successfully created the event
    //     res.status(201).json({ message: 'Event created successfully', data: savedEvent });
    //   } catch (error) {
    //     // Handle errors in event creation or saving
    //     console.error('Error creating event:', error);
    //     res.status(500).json({ error: 'Failed to create event', message: error.message });
    //   }
    // }
  }
}

// // app/api/events/route.js
// import dbConnect from "../../lib/dbConnect";
// import Event from "../../models/Event";

// export async function POST(req, res) {
//   await dbConnect();
//   console.log("!!!!!!!!!!!!!!!!!!!!!REQ",req,"????????????????res",res)
//   try {
//     const newEvent = new Event(req.body);
//     const savedEvent = await newEvent.save();
//     console.log("Event saved:", savedEvent);  // Correctly log the saved event

//     res.status(201).json({ message: "Event created successfully", data: savedEvent });
//   } catch (error) {
//     console.error("Error creating event:", error);  // Proper error logging
//     res.status(500).json({ message: "Error creating event", error: error.message });
//   }
// }











// export async function GET() {
//   const res = await fetch(process.env.MONGO_URI, {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   })
//   const data = await res.json()
 
//   return Response.json({ data })
// }

// import { NextResponse } from "next/server";

// export async function GET(){
//   // await dbConnect();

//   const data = {
//       title: 'rave',
//       description: 'hidden'
//   }
//   // console.log(data)
//   return NextResponse.json({data})
// }

// import { NextResponse } from "next/server";

// export async function GET(){
  










//     return NextResponse.json({data})
// }









import axios from 'axios';
import { NextApiResponse } from 'next';

// export default async function handler(req, res) {
//     if (req.method !== 'GET') {
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }

//     const data = JSON.stringify({
//         "collection": "events",
//         "database": "easytix",
//         "dataSource": "Cluster0",
//         "projection": {
//             "_id": 1
//         }
//     });

//     const config = {
//         method: 'post',
//         url: 'https://eu-west-2.aws.data.mongodb-api.com/app/data-agnhrtv/endpoint/data/v1/action/findOne',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Request-Headers': '*',
//             'api-key': process.env.MONGODB_ATLAS_API_KEY,  // Securely using the API key from environment variables
//         },
//         data: data
//     };

//     try {
//         const response = await axios(config);
//         console.log("Data fetched successfully:", response.data);
//         res.status(200).json(response.data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         res.status(500).json({ message: "Failed to fetch data", error: error.message });
//     }
// }







export async function GET(){

//   var data = JSON.stringify({
//     "collection": "events",
//     "database": "easytix",
//     "dataSource": "Cluster0",
//     "projection": {
//         "_id": 1
//     }
// });

var data = JSON.stringify({
  "collection": "events",
  "database": "easytix",
  "dataSource": "Cluster0",
  "projection": {
      "title": 1,
      "description": 1,
      "genre": 1,
      "date": 1,
      "location": 1,
      "standardTickets": 1,
      "vipTickets": 1,
      "image": 1
  }
});

const config = {
    method: 'post',
    url: 'https://eu-west-2.aws.data.mongodb-api.com/app/data-agnhrtv/endpoint/data/v1/action/find',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': process.env.MONGODB_ATLAS_API_KEY,  // Securely using the API key from environment variables
    },
    data: data
};

  try {
    const response = await axios(config);
    // console.log("Data fetched successfully:", response.data);
    // return new Response("200 success", {
    //   status: 200,
    //   // data:response.data
      
    // });

    // return new Response.json({response},{
    //   stats:200
    // })


    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
          'Content-Type': 'application/json'
      }
  });
    

} catch (error) {
    console.error("Error fetching data:", error);
    console.log(error);
    return new Response("500 fail", {
      status: 500,
    });
}
}