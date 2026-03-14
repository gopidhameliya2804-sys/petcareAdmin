let express = require("express");
let app = express();
let cors = require("cors");
const cookieParser = require("cookie-parser");

// Common
let AuthRoutes = require("./routes/auth.route");

//User
let Profile = require("./routes/user/user.route");
let UserPetCategory = require("./routes/user/petcategory.route");
let UserPet = require("./routes/user/pet.route");
let UserServiceCategory = require("./routes/user/servicecategory.route");
let UserServices = require("./routes/user/service.route");
let UserAdoption = require("./routes/user/adoption.route");
let UserFeedback = require("./routes/user/feedback.route");
let UserBooking = require("./routes/user/bookin.route");
let UserPayment = require("./routes/user/payment.route");
let UserPassword = require("./routes/user/password.route");
let UserInquiry = require("./routes/user/inquiry.route");


//admin
let Dashboard = require("./routes/admin/admin.route");
let Users = require("./routes/admin/users.route");
let PetCategory = require("./routes/admin/petcategory.route");
let Pet = require("./routes/admin/pet.route");
let ServiceCategory = require("./routes/admin/servicecategory.route");
let Service = require("./routes/admin/service.route");
let Adoption = require("./routes/admin/adoption.route");
let Booking = require("./routes/admin/booking.route");
let Inquiry = require("./routes/admin/inquiry.route");
let Payment = require("./routes/admin/payment.route");
let Feedback = require("./routes/admin/feedback.route");

//middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin:[ "https://petcareadmin.onrender.com", "https://petcareuser.onrender.com"],
    methods: ["GET" , "POST" , "PUT" ,"DELETE"],
    credentials: true
}))

// Common Routes
app.use("/api/auth", AuthRoutes)
app.use("/api/uploads", express.static("src/uploads"));

// User Routes
app.use("/api/user", Profile)
app.use("/api/user/petcategory", UserPetCategory)
app.use("/api/user/pet" , UserPet)
app.use("/api/user/servicecategory" , UserServiceCategory)
app.use("/api/user/services" , UserServices)
app.use("/api/user/adoption" , UserAdoption)
app.use("/api/user/feedback" , UserFeedback)
app.use("/api/user/booking" , UserBooking)
app.use("/api/user/payment" , UserPayment)
app.use("/api/user/password", UserPassword)
app.use("/api/user/inquiry" , UserInquiry)


// Admin Routes
app.use("/api/admin", Dashboard)
app.use("/api/admin/users", Users);
app.use("/api/admin/petcategory" , PetCategory);
app.use("/api/admin/pet", Pet);
app.use("/api/admin/servicecategory" , ServiceCategory);
app.use("/api/admin/service" , Service);
app.use("/api/admin/adoption" , Adoption);
app.use("/api/admin/booking" , Booking);
app.use("/api/admin/inquiry" , Inquiry);
app.use("/api/admin/paymeny" , Payment);
app.use("/api/admin/feedback" , Feedback);

module.exports = app;