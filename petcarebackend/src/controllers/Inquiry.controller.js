const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

let AddInquiry = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("inquiry");
    const userData = req.user;
    console.log(userData);
    const { name, message, email, phone, subject } = req.body;

    if (!name || !message || !email || !phone || !subject) {
      res
        .status(404)
        .send({ status: false, Message: "All fields are Required." });
      return;
    }

    let petcategory = await collection.insertOne({
      userId: ObjectId.createFromHexString(userData.id),
      name: name,
      message: message,
      subject: subject,
      email: email,
      phone: phone,
      timestamp: new Date(),
    });

    if (petcategory.acknowledged) {
      res
        .status(201)
        .send({ status: true, Message: "Inquiry added successfully" });
    }
  } catch (e) {
    res.status(505).send({ status: false, Message: "some error occured" });
  }
};

let getInquiry = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("inquiry");
  let inquiryData = await collection.find({}).toArray();
  if (!inquiryData) {
    res.send({ status: false, Message: "data not found", data: null });
  } else {
    res.send({ status: true, Message: "data found", data: inquiryData });
  }
};

let DeleteInquiry = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("inquiry");
    const { id } = req.params;
    let deleteQuery = await collection
      .deleteOne({ _id: ObjectId.createFromHexString(id) })
    if (deleteQuery.acknowledged) {
      res
        .status(201)
        .send({ status: true, Message: "Inquiry deleted successfully" });
    }
  } catch (e) {
    res.status(505).send({ status: false, Message: "some error occured" });
  }
};

module.exports = { AddInquiry, getInquiry, DeleteInquiry };
