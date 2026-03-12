const { ObjectId } = require("mongodb");
let bcrypt = require("bcrypt");
const { connectDb } = require("../config/connection");
let jwt = require("jsonwebtoken");
let key = process.env.KEY;

let signup = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("users");
    let { username, email, phone, password } = req.body;

    if (!username || !email || !phone || !password) {
      return res
        .status(404)
        .send({ status: true, message: "All filed are required..." });
    }

    let exituser = await collection.findOne({ $or: [{ email }, { phone }] });

    if (exituser) {
      return res
        .status(404)
        .send({ status: false, message: "User already exits" });
    }

    let securepassword = await bcrypt.hash(password, 10);

    let insertUSer = await collection.insertOne({
      _id: new ObjectId(),
      username: username,
      email: email,
      phone: phone,
      password: securepassword,
      role: "user",
      activeStatus: true,
    });

    if (insertUSer.acknowledged) {
      return res
        .status(201)
        .send({ status: true, message: "Register Successfully." });
    }
  } catch (e) {
    return res.status(505).send({ status: true, message: "Server Error" });
  }
};

let Login = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("users");
    let { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(404)
        .send({ status: false, message: "All field are required..." });
    }

    let exituser = await collection.findOne({ email: email });
    // console.log(exituser);

    if (!exituser) {
      return res
        .status(404)
        .send({ status: false, message: "User not registered" });
    }

    let correctPassword = await bcrypt.compare(password, exituser.password);

    if (!correctPassword) {
      return res
        .status(404)
        .send({ status: false, message: "Invalid Password" });
    }

    let userData = {
      id: exituser._id,
      name: exituser.username,
      email: exituser.email,
      phone: exituser.phone,
      role: exituser.role,
    };
    // console.log(userData);
    
    let token = jwt.sign(userData, key, { expiresIn: "5h" });

    res
      .status(201)
      .send({ status: true, message: "Login Successfully", token: token });
  } catch (e) {
    return res.status(505).send({ status: true, message: "Server Error" });
  }
};


module.exports = { signup, Login };
