const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

let AddPetCategory = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("petcategory");
    const { name } = req.body;
    const image = req.file.filename;
    console.log(image);
    

    if (!name || !image) {
      console.log(name);
      console.log(image);
      res
        .status(404)
        .send({ status: false, Message: "All fields are Required." });
      return;
    }

    let petcategory = await collection.insertOne({
      name: name,
      image: image,
      ActiveStatus: true,
    });

    if (petcategory.acknowledged) {
      res
        .status(201)
        .send({ status: true, Message: "Pet Category added successfully" });
    }
  } catch (e) {
    res.status(505).send({ status: false, Message: "some error occured" });
  }
};

let getPetCategory = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("petcategory");
  let petcategoryData = await collection.find({}).toArray();
  if (!petcategoryData) {
    res.send({ status: false, Message: "data not found", data: null });
  } else {
    res.send({ status: true, Message: "data found", data: petcategoryData });
  }
};

let EditPetCategory = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("petcategory");
    const { _id , name } = req.body;
    const { id } = req.params;

    let petcategoryData = await collection.findOne({ _id: ObjectId.createFromHexString(id),});
    if (!petcategoryData) {
      res.send({ status: false, Message: "data not found", data: null });
    } 

    let updateobj = {
      name:name || petcategoryData.name,
    }
    if (req.file) {
      updateobj.image = req.file.filename;
    }
    
    let updateQuery = await collection.updateOne({ _id:ObjectId.createFromHexString(id)}, {$set:updateobj});
    if (updateQuery.acknowledged) {
      res
        .status(200)
        .send({ status: true, Message: "Pet Category updated successfully" });
    }
  } catch (e) {
    res.status(500).send({ status: false, Message: "Internal Server Error. Please try again later." });
  }
};

let DeletePetCategory = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("petcategory"); 
    const { id } = req.params;
    let deleteQuery = await collection.deleteOne({_id:ObjectId.createFromHexString(id)});
    if (deleteQuery.acknowledged) {
      res
        .status(200)
        .send({ status: true, Message: "Pet Category Deleted successfully" });
    }
  } catch (e) {
    res.status(500).send({ status: false, Message: "some error occured" });
  }
}

module.exports = { AddPetCategory, getPetCategory , EditPetCategory , DeletePetCategory};
