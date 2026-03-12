const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

/**
 * GET ALL USERS (Admin)
 */
let getAllUsers = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("users");

    let users = await collection
      .find({ role: "user" })
      .project({ password: 0 }) 
      .sort({ createdAt: -1 })
      .toArray();

    if (!users || users.length === 0) {
      return res.send({
        status: false,
        Message: "No users found",
        data: [],
      });
    }

    res.send({
      status: true,
      Message: "Users fetched successfully",
      data: users,
    });
  } catch (e) {
    res.status(500).send({
      status: false,
      Message: "Some error occurred",
    });
  }
};


let getUserById = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("users");

    let user = await collection.findOne(
      { _id: new ObjectId(req.params.id) },
      { projection: { password: 0 } },
    );
   
    if (!user) {
      return res.send({
        status: false,
        Message: "User not found",
        data: null,
      });
    }

    res.send({
      status: true,
      Message: "User found",
      data: user,
    });
  } catch (e) {
    res.status(400).send({
      status: false,
      Message: "Invalid user id",
    });
  }
};

/**
 * UPDATE USER STATUS (Active / Blocked)
 */
let updateUserStatus = async (req, res) => {
  // try {
    let db = await connectDb();
    let collection = db.collection("users");
    const { status , username , email , phone } = req.body;
    const { id } = req.params;
    console.log("userID:",id);
   

    let result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          status: status,
          username: username,
          email:email,
          phone:phone,
          updatedAt: new Date(),
        },
      },
    );
    console.log(result);
   
    if (result.matchedCount === 0) {
      return res.send({
        status: false,
        Message: "User not found",
      });
    }

    res.send({
      status: true,
      Message: "User status updated successfully",
    });
  // } catch (e) {
  //   res.status(500).send({
  //     status: false,
  //     Message: "Failed to update user status",
  //   });
  // }
};

/**
 * DELETE USER (Admin)
 */
let deleteUser = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("users");

    let user = await collection.findOne({
      _id: new ObjectId(req.params.id),
    });

    if (!user) {
      return res.send({
        status: false,
        Message: "User not found",
      });
    }

    // 🚫 Do not allow admin deletion
    if (user.role === "admin") {
      return res.status(403).send({
        status: false,
        Message: "Admin user cannot be deleted",
      });
    }

    await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });

    res.send({
      status: true,
      Message: "User deleted successfully",
    });
  } catch (e) {
    res.status(500).send({
      status: false,
      Message: "Failed to delete user",
    });
  }
};

module.exports = { getAllUsers,
  getUserById,
  updateUserStatus,
  deleteUser,
};
