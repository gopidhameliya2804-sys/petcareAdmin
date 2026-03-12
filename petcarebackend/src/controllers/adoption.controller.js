const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

let AddPetAdoption = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("adoption");
    let petCollection = db.collection("pet");
    const { pet_id, adop_reason } = req.body;
    const userdata = req.user;
    // console.log(userdata);

    if (!pet_id || !adop_reason) {
      res
        .status(404)
        .send({ status: false, Message: "All fields are Required." });
      return;
    }

    let adoption = await collection.insertOne({
      user_id: ObjectId.createFromHexString(userdata.id),
      pet_id: ObjectId.createFromHexString(pet_id),
      adop_status: "Approved",
      adop_reason: adop_reason,
    });

    let petUpdate = await petCollection.updateOne(
      {
        _id: ObjectId.createFromHexString(pet_id),
      },
      { $set: { status: "Inprogess" } },
    );

    console.log(petUpdate);

    if (adoption.acknowledged && petUpdate.modifiedCount >= 1) {
      res.status(201).send({ status: true, Message: "pet adopt successfully" });
    }
  } catch (e) {
    res.status(500).send({ status: false, Message: "some error occured" });
  }
};

let getPetAdoption = async (req, res) => {
  let db = await connectDb();
  let collection = db.collection("adoption");
  const { petId } = req.params;
  let petadoptionData = await collection
    .find({ pet_id: new ObjectId(petId) })
    .toArray();
  if (!petadoptionData) {
    res.send({ status: false, Message: "data not found", data: null });
  } else {
    res.send({ status: true, Message: "data found", data: petadoptionData });
  }
};

let getAllAdoptions = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("adoption");
    const usersdata = req.user;
    let adoptionData = await collection
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
        { $unwind: "$petDetails" },
        {
          $project: {
            adop_status: 1,
            adop_reason: 1,
            createdAt: 1,
            user_name: "$userDetails.username", 
            pet_name: "$petDetails.name",
            pet_image: "$petDetails.image",
            pet_age: "$petDetails.age",
            pet_price: "$petDetails.price",
            pet_time: "$petDetails.timestamp",
          },
        },
      ])
      .toArray();
    //  console.log(adoptionData);
    res.send({
      status: true,
      Message: "data found",
      data: adoptionData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      Message: "Server error",
    });
  }
};

let DeleteAdopt = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("adoption");
    const { id } = req.params;
    let deleteQuery = await collection.deleteOne({
      _id: ObjectId.createFromHexString(id),
    });
    if (deleteQuery.acknowledged) {
      res
        .status(200)
        .send({ status: true, Message: "Pet Adopt Request Deleted successfully" });
    }
  } catch (e) {
    res.status(500).send({ status: false, Message: "some error occured" });
  }
};

module.exports = { AddPetAdoption, getPetAdoption, getAllAdoptions , DeleteAdopt};
