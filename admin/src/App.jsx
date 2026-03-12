import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './common/Header';
import Footer from './common/Footer';
import Index from './pages/Index';
import Input from './pages/Input';
import Alert from './pages/Alert';
import Badge from './pages/Badge';
import Breadcrumb from './pages/Breadcrumb';
import Button from './pages/Button';
import Login from './pages/Login';
import Cards from './pages/Cards';
import Carousel from './pages/Carousel';
import Dropdown from './pages/Dropdown';
import ListGroup from './pages/ListGroup';
import Modal from './pages/Modal';
import Navs from './pages/Navs';
import Pagination from './pages/Pagination';
import Progress from './pages/Progress';
import Spinner from './pages/Spinner';
import Tooltip from './pages/Tooltip';
import Avatar from './pages/Avatar';
import Sweetalert from './pages/Sweetalert';
import Toastify from './pages/Toastify';
import Rating from './pages/Rating';
import Divider from './pages/Divider';
import Layout from './pages/Layout';
import VerticalColumn from './pages/VerticalColumn';
import VerticalNavbar from './pages/VerticalNavbar';
import Horizontal from './pages/Horizontal';
import InputGroup from './pages/InputGroup';
import Select from './pages/Select';
import Radio from './pages/Radio';
import Checkbox from './pages/Checkbox';
import Textarea from './pages/Textarea';
import Quill from './pages/Quill';
import CKEditor from './pages/CKEditor';
import Summernote from './pages/Summernote';
import Tinymce from './pages/Tinymce';
import Chatbox from './pages/Chatbox';
import FormLayout from './pages/FormLayout';
import Table from './pages/Table';
import DataTable from './pages/DataTable';
import Pricing from './pages/Pricing';
import TodoList from './pages/TodoList';
import BootstrapIcon from './pages/BootstrapIcon';
import Fontawesome from './pages/Fontawesome';
import DripIcons from './pages/DripIcons';
import Chartjs from './pages/Chartjs';
import ApexChart from './pages/ApexChart';
import FileUpload from './pages/FileUpload';
import GoogleMap from './pages/GoogleMap';
import JsvectorMap from './pages/JsvectorMap';
import AppicationEmail from './pages/AppicationEmail';
import Chat from './pages/Chat';
import Gallery from './pages/Gallery';
import Checkout from './pages/Checkout';
import Error403 from './pages/Error403';
import Error404 from './pages/Error404';
import Error500 from './pages/Error500';
import ProtectPages from './utils/ProtectPage';
import ManageUsers from './pages/ManageUsers';
import ManageServiceCategories from './pages/ManageServiceCategories';
import ManageServices from './pages/ManageServices';
import ManageBookings from './pages/ManageBooking';
import ManagePayments from './pages/ManagePayments';
import ManagePetCategories from './pages/ManagePetCategories';
import ManagePets from './pages/ManagePet';
import ManageAdoptionPets from './pages/ManageAdoptionPets';
import ManageAdoptionInquiry from './pages/ManageAdoptionInquiry';
import ManageFeedback from './pages/ManageFeedback';
import ManageInquiry from './pages/ManageInquriy';
import ViewReviews from './pages/ManageReview';
import PetCategoryInput from './pages/AddPetCategory';
import PetInput from './pages/Addpet';
import ServiceCategoryInput from './pages/AddserviceCategory';
import ServiceInput from './pages/AddService';
import EditService from './pages/EditService';
import EditPetCategory from './pages/EditPatCategory';
import EditPet from './pages/EditPet';
import BookingHistory from './pages/BookingHistory';





function App() {
  
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<ProtectPages><Index /></ProtectPages>}></Route>
          <Route path='/alert' element={<Alert />}></Route>
          <Route path='/badge' element={<Badge />}></Route>
          <Route path='/breadcrumb' element={<Breadcrumb />}></Route>
          <Route path='/button' element={<Button />}></Route>
          <Route path='/card' element={<Cards />}></Route>
          <Route path='/carousel' element={<Carousel />}></Route>
          <Route path='/dropdown' element={<Dropdown />}></Route>
          <Route path='/list-group' element={<ListGroup />}></Route>
          <Route path='/modal' element={<Modal />}></Route>
          <Route path='/navs' element={<Navs />}></Route>
          <Route path='/pagination' element={<Pagination />}></Route>
          <Route path='/progress' element={<Progress />}></Route>
          <Route path='/spinner' element={<Spinner />}></Route>
          <Route path='/tooltip' element={<Tooltip />}></Route>
          <Route path='/avatar' element={<Avatar />}></Route>
          <Route path='/sweetalert' element={<Sweetalert />}></Route>
          <Route path='/toastify' element={<Toastify />}></Route>
          <Route path='/rating' element={<Rating />}></Route>
          <Route path='/divider' element={<Divider />}></Route>
          <Route path='/layout-default' element={<Layout />}></Route>
          <Route path='/vertical-column' element={<VerticalColumn />}></Route>
          <Route path='/vertical-navbar' element={<VerticalNavbar />}></Route>
          <Route path='/horizontal' element={<Horizontal />}></Route>
          <Route path='/input' element={<Input />}></Route>
          <Route path='/input-group' element={<InputGroup />}></Route>
          <Route path='/select' element={<Select />}></Route>
          <Route path='/radio' element={<Radio />}></Route>
          <Route path='/checkbox' element={<Checkbox />}></Route>
          <Route path='/textarea' element={<Textarea />}></Route>
          <Route path='/form-layout' element={<FormLayout />}></Route>
          <Route path='/quill' element={<Quill />}></Route>
          <Route path='/ckeditor' element={<CKEditor />}></Route>
          <Route path='/summernote' element={<Summernote />}></Route>
          <Route path='/tinymce' element={<Tinymce />}></Route>
          <Route path='/table' element={<Table />}></Route>
          <Route path='/datatable' element={<DataTable />}></Route>
          <Route path='/chatbox' element={<Chatbox />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='/todolist' element={<TodoList />}></Route>
          <Route path='/bootstrap-icons' element={<BootstrapIcon />}></Route>
          <Route path='/fontawesome' element={<Fontawesome />}></Route>
          <Route path='/dripicons' element={<DripIcons />}></Route>
          <Route path='/chartjs' element={<Chartjs />}></Route>
          <Route path='/apexcharts' element={<ApexChart />}></Route>
          <Route path='/file-uploader' element={<FileUpload />}></Route>
          <Route path='/google-map' element={<GoogleMap />}></Route>
          <Route path='/jsvectormap' element={<JsvectorMap />}></Route>
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
          <Route path='/manage-payment' element={<ManagePayments />}></Route>
          <Route path='/manage-petcategory' element={<ManagePetCategories />}></Route>
          <Route path='/manage-pet' element={<ManagePets />}></Route>
          <Route path='/manage-petAdoption' element={<ManageAdoptionPets />}></Route>
          <Route path='/manage-adoptioninquiry' element={<ManageAdoptionInquiry />}></Route>
          <Route path='/manage-feedback' element={<ManageFeedback />}></Route>
          <Route path='/manage-inquiry' element={<ManageInquiry />}></Route>
          <Route path='/manage-review' element={<ViewReviews />}></Route>

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
