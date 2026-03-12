const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

let AddService = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("service");
    const { ser_cate_id, name, desc, price, status, timestamp } = req.body;
    if (!req.file) {
      return res.status(400).send({
        status: false,
        Message: "Image is required",
      });
    }
    const image = req.file.filename;

    if (
      !ser_cate_id ||
      !name ||
      !image ||
      !desc ||
      !price ||
      !status ||
      !timestamp
    ) {
      console.log(name);
      console.log(image);
      console.log(desc);
      console.log(price);
      console.log(status);
      console.log(timestamp);
      res
        .status(404)
        .send({ status: false, Message: "All fields are Required." });
      return;
    }

    let service = await collection.insertOne({
      ser_cate_id: ObjectId.createFromHexString(ser_cate_id),
      name: name,
      image: image,
      desc: desc,
      price: price,
      status: status,
      timestamp: new Date(),
    });

    if (service.acknowledged) {
      res
        .status(201)
        .send({ status: true, Message: "Service added successfully" });
    }
  } catch (e) {
    res.status(505).send({ status: false, Message: "some error occured" });
  }
};

let getService = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("service");
  const { sercategoryid } = req.params;
  
  let serviceData = await collection
    .aggregate([
      {
        $match: {
          ser_cate_id: new ObjectId(sercategoryid),
        },
      },
      {
        $lookup: {
          from: "servicecategory",
          localField: "ser_cate_id",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $unwind: "$category",
      },
      {
        $project: {
          name: 1,
          image: 1,
          desc: 1,
          price: 1,
          status: 1,
          timestamp: 1,
          categoryName: "$category.name",
        },
      },
    ])
    .toArray();

  // console.log(serviceData);

  if (!serviceData) {
    res.send({ status: false, Message: "data not found", data: null });
  } else {
    res.send({ status: true, Message: "data found", data: serviceData });
  }
  console.log(serviceData);
};

let getAllService = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("service");
  const { id } = req.params;
  let serviceData = await collection.find({}).toArray();
  if (!serviceData) {
    res.send({ status: false, Message: "data not found", data: null });
  } else {
    res.send({ status: true, Message: "data found", data: serviceData });
  }
};

let EditService = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("service");
    const { id } = req.params;
    const { _id, ser_cate_id, name, desc, price, status, timestamp } =
      req.body;
    let serviceData = await collection.findOne({
      _id: ObjectId.createFromHexString(id),
    });
    if (!serviceData) {
      res.send({ status: false, Message: "data not found", data: null });
    }

    let updateobj = {
      name: name || serviceData.name,
      desc: desc || serviceData.desc,
      price: price || serviceData.price,
      status: status || serviceData.status,
      timestamp: timestamp ? new Date(timestamp) : serviceData.timestamp,
    };
    if (req.file) {
      updateobj.image = req.file.filename;
    }
    
    let updateQuery = await collection.updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: updateobj },
    );
    if (updateQuery.acknowledged) {
      res
        .status(200)
        .send({ status: true, Message: "Service updated successfully" });
    }
  } catch (e) {
    res.status(500).send({
      status: false,
      Message: "Internal Server Error. Please try again later.",
    });
  }
};

let DeleteService = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("service");
    const { id } = req.params;
    let deleteQuery = await collection.deleteOne({
      _id: ObjectId.createFromHexString(id),
    });
    if (deleteQuery.acknowledged) {
      res
        .status(200)
        .send({ status: true, Message: "Service Deleted successfully" });
    }
  } catch (e) {
    res.status(500).send({ status: false, Message: "some error occured" });
  }
};

module.exports = {
  AddService,
  getService,
  getAllService,
  EditService,
  DeleteService,
};
