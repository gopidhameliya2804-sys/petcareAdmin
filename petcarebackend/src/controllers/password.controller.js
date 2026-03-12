const { connectDb } = require("../config/connection");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const ForgotPassword = async (req, res) => {
  // try {
    let db = await connectDb();
    let collection = db.collection("users");
    const { email } = req.body;

    if (!email) {
      return res.status(400).send({
        status: false,
        Message: "Email is required.",
      });
    }

    let user = await collection.findOne({ email });

    if (!user) {
      return res.status(404).send({
        status: false,
        message: "Email not registered",
      });
    }
    const resetToken = jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "15m",
    });
    const resetLink = `http://localhost:5173/reset-password/${resetToken}`;

    const transporter = nodemailer.createTransport({
      service: "gmail", // simpler than smtp.forwardemail
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      html: `
        <h3>Password Reset</h3>
        <p>Click the link below to reset your password:</p>
        <a href="${resetLink}">Click here to Reset Password</a>
        <a href="http://localhost:3000/reset-password">Reset Password</a>
        <p>This link is valid for 15 minutes.</p>
      `,
    });

    return res.status(200).send({
      status: true,
      message: "Password reset email sent successfully",
    });
  // } catch (e) {
  //   console.log(e);
  //   return res.status(500).send({
  //     status: false,
  //     message: "Something went wrong",
  //   });
  // }
};

module.exports = { ForgotPassword };
