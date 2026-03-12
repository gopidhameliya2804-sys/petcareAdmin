const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

let Profile = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("users");
    let userId = req.user.id;

    let user = await collection.findOne(
      { _id: new ObjectId(userId) },
      { projection: { password: 0 } }, 
    );
    console.log("main User:",user);
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Profile Found",
      users: user, 
      user: req.user,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error. Please try again later",
    });
  }
};

module.exports = { Profile };
