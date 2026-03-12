let app = require("./app");
const { connectDB } = require("./config/connection");
require("dotenv").config();
let port = process.env.PORT;

// connectDB();

app.listen(port , () => {
    console.log("Server Started");
})