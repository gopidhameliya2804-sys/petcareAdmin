const { connectDb } = require("../config/connection");

let AddUser = async (req, res) => {
  try {
    let db = await connectDb();
  let collection = db.collection("register");
  const { name, email, password , address, phone , timestamp } = req.body;

  if (!name || !email || !password || !address || !phone || !timestamp) {
    res.status(404).send({ status: true, Message: "All fields are Required." });
    return;
  }

  let register = await collection.insertOne({
    name: name,
    email: email,
    password:password,
    address:address,
    phone:phone,
    timestamp:new Date(),
    ActiveStatus: true,
  });

  if (register.acknowledged) {
    res
      .status(201)
      .send({ status: true, Message: "Pet Category added successfully" });
  }
  } catch (e) {
     res.status(505).send({ status: false, Message: "some error occured" });
  }
};

let getUser = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("register");
  let registerData = await collection.find({}).toArray();
  if (!registerData) {
    res.send({ status: false, Message: "data not found", data: null });
  } else {
    res.send({ status: true, Message: "data found", data: registerData });
  }
};

module.exports = { AddUser , getUser }