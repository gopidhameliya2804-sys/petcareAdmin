const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

let AddBooking = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("booking");
    const { ser_id, date, time, pet_id } = req.body;
    const userdata = req.user;

    if (!ser_id || !date || !time || !pet_id) {
      return res.status(400).send({
        status: false,
        Message: "All fields are Required.",
      });
    }

    let booking = await collection.insertOne({
      user_id: ObjectId.createFromHexString(userdata.id),
      pet_id: ObjectId.createFromHexString(pet_id),
      ser_id: ObjectId.createFromHexString(ser_id),
      date: new Date(date),
      time: time,
      status: "PENDING",
      createdAt: new Date(),
    });
    // console.log("bookinData:",booking);
    if (booking.acknowledged) {
      res.status(201).send({ status: true, Message: " Booking successfully" });
    }
  } catch (e) {
    res.status(500).send({ status: false, Message: "some error occured" });
  }
};

let getBookig = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("booking");
  const usersdata = req.user;
  console.log("User:", usersdata);
  let bookingData = await collection
    .aggregate([
      {
        $match: {
          user_id: new ObjectId(usersdata.id),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      { $unwind: { path: "$userDetails", preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          from: "pet",
          localField: "pet_id",
          foreignField: "_id",
          as: "petDetails",
        },
      },
      {
        $unwind: {
          path: "$petDetails",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: "service",
          localField: "ser_id",
          foreignField: "_id",
          as: "serviceDetails",
        },
      },
      {
        $unwind: {
          path: "$serviceDetails",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          date: 1,
          time: 1,
          status: 1,
          createdAt: 1,
          user_name: "$userDetails.username",
          pet_name: "$petDetails.name",
          pet_age: "$petDetails.age",
          service_name: "$serviceDetails.name",
          service_price: "$serviceDetails.price",
        },
      },
    ])
    .toArray();
  console.log(bookingData);

  if (!bookingData) {
    res.send({ status: false, Message: "data not found", data: null });
  } else {
    res.send({ status: true, Message: "data found", data: bookingData });
  }
};

let getAllBookig = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("booking");
  const usersdata = req.user;
  // console.log("User:", usersdata);
  let bookingData = await collection
    .aggregate([
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      { $unwind: { path: "$userDetails", preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          from: "pet",
          localField: "pet_id",
          foreignField: "_id",
          as: "petDetails",
        },
      },
      {
        $unwind: {
          path: "$petDetails",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: "service",
          localField: "ser_id",
          foreignField: "_id",
          as: "serviceDetails",
        },
      },
      {
        $unwind: {
          path: "$serviceDetails",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          date: 1,
          time: 1,
          status: 1,
          createdAt: 1,
          user_name: "$userDetails.username",
          pet_name: "$petDetails.name",
          pet_age: "$petDetails.age",
          service_name: "$serviceDetails.name",
          service_price: "$serviceDetails.price",
        },
      },
    ])
    .toArray();
  if (!bookingData) {
    res.send({ status: false, Message: "data not found", data: null });
  } else {
    res.send({ status: true, Message: "data found", data: bookingData });
  }
};

let DeleteBooking = async (req, res) => {
  // try {
    let db = await connectDb();
    let collection = db.collection("booking");
    const { id } = req.params;
    let deleteQuery = await collection
      .deleteOne({ _id: ObjectId.createFromHexString(id) })
    if (deleteQuery.acknowledged) {
      res
        .status(201)
        .send({ status: true, Message: "Booking deleted successfully" });
    }
  // } catch (e) {
  //   res.status(505).send({ status: false, Message: "some error occured" });
  // }
};


let UpdateBookingStatus = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("booking");

    const { id } = req.params;
    const { status } = req.body;

    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: status } }
    );

    res.send({
      status: true,
      message: "Booking status updated",
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: false,
      message: "Error updating status",
    });
  }
};

module.exports = { AddBooking, getBookig, getAllBookig , DeleteBooking , UpdateBookingStatus};
