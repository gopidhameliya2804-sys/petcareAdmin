import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./comman/Footer"
import Header from "./comman/Header"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Index from "./pages/Index"
import Petgrooming from "./pages/Petgrooming";
import DogSetting from "./pages/DogSetting";
import HealthyMeal from "./pages/HealthyMeal";
import VeterinarySer from "./pages/VeterinarySer";
import Blog from "./pages/Blog";
import BlogGv from "./pages/BlogGv";
import BlogDetails from "./pages/BlogDetails";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Faq from "./pages/Faq";
import Team from "./pages/Team";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ProtectPages from "./utils/protectPages";
import Profile from "./pages/profile";
import ServiceCategory from "./pages/ServiceCategory";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import PetCategories from "./pages/Petcategories";
import Pet from "./pages/Pet";
import Inquiry from "./pages/Inquiry";
import Reviews from "./pages/Review";
import AdoptPets from "./pages/Adopt";
import AdoptionTracking from "./pages/AdoptionTracking";
import NotFound from "./pages/NotFound";
import PetDetails from "./pages/PetDetails";
import PetAdoption from "./pages/PetAdoption";
import PetFeedback from "./pages/PetFeedback";
import BookingHistory from "./pages/BookingHistory";
import EditProfile from "./pages/EditProfile";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProtectPages><Index /></ProtectPages>}></Route>
          <Route path="/service-category" element={<ServiceCategory />}></Route>
          <Route path="/services/:bycategoryid" element={<Services />}></Route>
          <Route path="/service-details" element={<ServiceDetails />}></Route>
          <Route path="/pet-categories"element={<PetCategories />}></Route>
          <Route path="/pet/:bycategoryid" element={<Pet />}></Route>
          <Route path="/pet-details" element={<PetDetails />}></Route>

          <Route path="/pet-adoption" element={<ProtectPages><PetAdoption /></ProtectPages>}></Route>
          <Route path="/adoption-tracking" element={<AdoptionTracking />}></Route>
          <Route path="/adopt" element={<AdoptPets />}></Route>

          <Route path="/booking" element={<Booking />}></Route>
          <Route path="/booking-history" element={<BookingHistory />}></Route>  

          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/pet-feedback" element={<PetFeedback />}></Route>
          <Route path="/inquiry" element={<Inquiry />}></Route>
          <Route path="/review" element={<Reviews />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/petgrooming" element={<Petgrooming />}></Route>
          <Route path="/dogsetting" element={<DogSetting />}></Route>
          <Route path="/healthymeal" element={<HealthyMeal />}></Route>
          <Route path="/veterinaryService" element={<VeterinarySer />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog_gridview" element={<BlogGv />}></Route>
          <Route path="/blogdetails" element={<BlogDetails />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/productdetails" element={<ProductDetails />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/team" element={<Team />}></Route>

          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/reset-password/:token" element={<ResetPassword />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path="/edit-profile" element={<EditProfile />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
