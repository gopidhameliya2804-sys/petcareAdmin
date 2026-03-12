const { ObjectId } = require("mongodb");
const { connectDb } = require("../config/connection");
const Razorpay = require("razorpay");

const createOrder = async (req, res) => {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID, // Use environment variables for security
    key_secret: process.env.RAZORPAY_SECRET_KEY,
  });
  try {
    const { amount } = req.body;
    console.log(amount);
    const options = {
      amount: amount * 100,
      currency: "INR",
    };
 
    const order = await razorpay.orders.create(options);
    return res.status(200).send({
      status:true,
      message:"Payment Successfully.",
      data:order,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      status: false,
      message:"Server error",
    })
  }
};



module.exports = { createOrder };
