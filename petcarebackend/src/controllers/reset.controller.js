const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");

const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res.status(400).send({
        status: false,
        message: "Token and new password required",
      });
    }

    const decoded = jwt.verify(token, process.env.KEY);

    const db = await connectDb();
    const collection = db.collection("users");

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await collection.updateOne(
      { _id: new ObjectId(decoded.id) },
      { $set: { password: hashedPassword } }
    );

    res.status(200).send({
      status: true,
      message: "Password reset successfully",
    });

  } catch (error) {
    res.status(400).send({
      status: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = { resetPassword };