const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

let AddFeedback = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("feedback");
    const { user_id, name, email, rating, review, timestamp } = req.body;

    if (!user_id || !name || !email || !rating || !review || !timestamp) {
      res
        .status(404)
        .send({ status: false, Message: "All fields are Required." });
      return;
    }

    let feedback = await collection.insertOne({
      user_id: ObjectId.createFromHexString(user_id),
      name: name,
      email: email,
      rating: rating,
      review: review,
      timestamp: new Date(),
    });

    if (feedback.acknowledged) {
      res
        .status(201)
        .send({ status: true, Message: "Feedback added successfully" });
    }
  } catch (e) {
    res.status(505).send({ status: false, Message: "some error occured" });
  }
};

let getfeedback = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("feedback");
    let feedbackData = await collection.find({}).toArray();
    if (!feedbackData) {
      res.send({ status: false, Message: "data not found", data: null });
    } else {
      res.send({ status: true, Message: "data found", data: feedbackData });
    }
  } catch (e) {
    res.status(505).send({ status: false, Message: "some error occured" });
  }
};

let DeleteFeedback = async (req , res) => {
  // try{
    let db = await connectDb();
    let collection = db.collection("feedback");
    const { id } = req.params;
    let DeleteQuery = await collection.deleteOne({_id : ObjectId.createFromHexString(id) });
    if (DeleteQuery.acknowledged) {
      res
        .status(201)
        .send({ status: true, Message: "Feedback delete successfully" });
    }
  // } catch (e) {
  //   res.status(505).send({ status: false, Message: "some error occured" });
  // }
}

module.exports = { AddFeedback, getfeedback, DeleteFeedback };
