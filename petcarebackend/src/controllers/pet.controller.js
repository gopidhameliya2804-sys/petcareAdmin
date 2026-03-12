const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

let AddPet = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("pet");
    const { pet_cate_id, name,  desc, age, status, timestamp } = req.body;
    const image = req.file.filename;
    // console.log(image);

    if (
      !pet_cate_id ||
      !name ||
      !image ||
      !desc ||
      !age ||
      !status
    ) {
      // console.log(pet_cate_id);
      // console.log(name);
      // console.log(image);
      // console.log(desc);
      // console.log(age);
      // console.log(status);
      // console.log(timestamp);
      res
        .status(404)
        .send({ status: true, Message: "All fields are Required." });
      return;
    }

    let pet = await collection.insertOne({
      pet_cate_id: ObjectId.createFromHexString(pet_cate_id),
      name: name,
      image: image,
      desc: desc,
      age: age,
      status: "AVAILABLE",
      ActiveStatus:true,
      timestamp: new Date(),
    });

    if (pet.acknowledged) {
      res.status(201).send({ status: true, Message: "Pet added successfully" });
    }
  } catch (e) {
    res.status(505).send({ status: false, Message: "some error occured" });
  }
};

let getPet = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("pet");
  const { petcategoryid } = req.params;
  let petData = await collection
    .find({ pet_cate_id: new ObjectId(petcategoryid), status: "Available" })
    .toArray();
  if (!petData) {
    res.send({ status: false, Message: "data not found", data: null });
  } else {
    res.send({ status: true, Message: "data found", data: petData });
  }
};

let getAllPet = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("pet");
  const { id } = req.params;
  let petData = await collection
    .find({})
    .toArray();
  if (!petData) {
    res.send({ status: false, Message: "data not found", data: null });
  } else {
    res.send({ status: true, Message: "data found", data: petData });
  }
};

let EditPet = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("pet");
    const {_id , pet_cate_id , name, desc, age, status, timestamp } = req.body;
    const { id } = req.params;
    let petData = await collection.findOne({
      _id: ObjectId.createFromHexString(id),
    });
    if (!petData) {
      res.send({ status: false, Message: "data not found", data: null });
    } 

    let updateobj = {
      name:name || petData.name,
      desc: desc || petData.desc,
      age: age || petData.age ,
      status: status || petData.status,
      timestamp: timestamp ?new Date(timestamp) : petData.timestamp
    }
    if (req.file) {
      updateobj.image = req.file.filename;
    }
    
    let updateQuery = await collection.updateOne({_id:ObjectId.createFromHexString(id)}, {$set:updateobj});
    if (updateQuery.acknowledged) {
      res
        .status(200)
        .send({ status: true, Message: "Pet updated successfully" });
    }
  } catch (e) {
    res.status(500).send({ status: false, Message: "Internal Server Error. Please try again later." });
  }
};

let DeletePet = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("pet"); 
    const { id } = req.params;
    let deleteQuery = await collection.deleteOne({_id:ObjectId.createFromHexString(id)});
    if (deleteQuery.acknowledged) {
      res
        .status(200)
        .send({ status: true, Message: "Pet Deleted successfully" });
    }
  } catch (e) {
    res.status(500).send({ status: false, Message: "some error occured" });
  }
}


module.exports = { AddPet, getPet , getAllPet , EditPet , DeletePet };
