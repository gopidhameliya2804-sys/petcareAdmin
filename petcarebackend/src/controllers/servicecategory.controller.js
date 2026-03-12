const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");
const upload = require("../middleware/multer.middleware");

let AddServiceCategory = async (req, res) => {
  try {
  let db = await connectDb();
  let collection = db.collection("servicecategory");
  const { name , status } = req.body;
  if (!req.file) {
    return res.status(400).send({
      status: false,
      Message: "Image is required",
    });
  }
  const image = req.file.filename;
  if (!name || !image || !status) {
    res
      .status(404)
      .send({ status: false, Message: "All fields are Required." });
    return;
  }

  let servicecategory = await collection.insertOne({
    name: name,
    image: image,
    status: status ,
  });

  if (servicecategory.acknowledged) {
    res
      .status(201)
      .send({ status: true, Message: "Service Category added successfully" });
  }
  } catch (e) {
    res.status(505).send({ status: false, Message: "some error occured" });
  }
};

let getServiceCategory = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("servicecategory");
  let serviceCategoryData = await collection.find({}).toArray();
  if (!serviceCategoryData) {
    res.send({ status: false, Message: "data not found", data: null });
  } else {
    res.send({
      status: true,
      Message: "data found",
      data: serviceCategoryData,
    });
  }
};

let EditServiceCategory = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("servicecategory");
    const { _id, name , status } = req.body;
    const { id } = req.params;

    let serviceCategoryData = await collection.findOne({
      _id: ObjectId.createFromHexString(id),
    });
    if (!serviceCategoryData) {
      res.send({ status: false, Message: "data not found", data: null });
    }

    let updateobj = {
      name: name || serviceCategoryData.name,
      status: status || serviceCategoryData.status,
    };
    if(req.file){
      updateobj.image = req.file.filename;
    }

    let updateQuery = await collection.updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: updateobj },
    );
    if (updateQuery.acknowledged) {
      res
        .status(200)
        .send({
          status: true,
          Message: "Service Category updated successfully",
        });
    }
  } catch (e) {
    res
      .status(500)
      .send({
        status: false,
        Message: "Internal Server Error. Please try again later.",
      });
  }
};

let DeleteServiceCategory = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("servicecategory");
    const { id } = req.params;
    let deleteQuery = await collection.deleteOne({
      _id: ObjectId.createFromHexString(id),
    });
    if (deleteQuery.acknowledged) {
      res
        .status(200)
        .send({
          status: true,
          Message: "Service Category Deleted successfully",
        });
    }
  } catch (e) {
    res.status(500).send({ status: false, Message: "some error occured" });
  }
};

module.exports = {
  AddServiceCategory,
  getServiceCategory,
  EditServiceCategory,
  DeleteServiceCategory,
};
