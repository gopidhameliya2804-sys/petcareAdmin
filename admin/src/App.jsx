import './App.css'
import { HashRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Header from './common/Header';
import Footer from './common/Footer';
import Index from './pages/Index';
import Login from './pages/Login';
import AppicationEmail from './pages/AppicationEmail';
import Chat from './pages/Chat';
import Gallery from './pages/Gallery';
import Checkout from './pages/Checkout';
import Error403 from './pages/Error403';
import Error404 from './pages/Error404';
import Error500 from './pages/Error500';
import ManageUsers from './pages/ManageUsers';
import ManageServiceCategories from './pages/ManageServiceCategories';
import ManageServices from './pages/ManageServices';
import ManageBookings from './pages/ManageBooking';
import ManagePetCategories from './pages/ManagePetCategories';
import ManagePets from './pages/ManagePet';
import ManageAdoptionPets from './pages/ManageAdoptionPets';
import ManageFeedback from './pages/ManageFeedback';
import ManageInquiry from './pages/ManageInquriy';
import PetCategoryInput from './pages/AddPetCategory';
import PetInput from './pages/Addpet';
import ServiceCategoryInput from './pages/AddserviceCategory';
import ServiceInput from './pages/AddService';
import EditService from './pages/EditService';
import EditPetCategory from './pages/EditPatCategory';
import EditPet from './pages/EditPet';
import BookingHistory from './pages/BookingHistory';
import ProtectPages from './utils/ProtectPage';





function App() {
  
  return (
    <>
      <ToastContainer  position='top-right' autoClose="1200" theme='colored' style={{zIndex:"999999"}} />
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<ProtectPages><Index /></ProtectPages>}></Route>
          <Route path='/application-email' element={<AppicationEmail />}></Route>
          <Route path='/application-chat' element={<Chat />}></Route>
          <Route path='/Gallery' element={<Gallery />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/error-403' element={<Error403 />}></Route>
          <Route path='/error-404' element={<Error404 />}></Route>
          <Route path='/error-500' element={<Error500 />}></Route>
          <Route path='/login' element={<Login />}></Route>

          <Route path='/manage-users' element={<ManageUsers />}></Route>
          <Route path='/manage-servicecategories' element={<ManageServiceCategories />}></Route>
          <Route path='/manage-services' element={<ManageServices />}></Route>
          <Route path='/manage-petcategory' element={<ManagePetCategories />}></Route>
          <Route path='/manage-pet' element={<ManagePets />}></Route>
          <Route path='/manage-petAdoption' element={<ManageAdoptionPets />}></Route>
          <Route path='/manage-feedback' element={<ManageFeedback />}></Route>
          <Route path='/manage-inquiry' element={<ManageInquiry />}></Route>

          <Route path='/manage-booking' element={<ManageBookings />}></Route>
          <Route path='/booking-history' element={<BookingHistory />}></Route>

          <Route path='/add-petcategory' element={<PetCategoryInput />}></Route>
          <Route path='/add-pet' element={<PetInput />}></Route>
          <Route path='/add-servicecategory' element={<ServiceCategoryInput />}></Route>
          <Route path='/add-service' element={<ServiceInput />}></Route>

          <Route path='/edit-servicecategory' element={<ServiceCategoryInput />}></Route>
          <Route path='/edit-service' element={<EditService />}></Route>
          <Route path='/edit-petcategory' element={<EditPetCategory />}></Route>
          <Route path='/edit-pet' element={<EditPet />}></Route>
          <Route path='*' element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
