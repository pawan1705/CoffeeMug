import './App.css';
import Header from './HeaderComponenet/Header'
import Banner from './BannerComponent/Banner'
import About from './AboutComponenet/About'
import Galery from './GaleryComponenet/Galery'
import Services from './ServicesComponenet/Services';
import Testimonial from './TestimonialComponenet/Testimonial'
import Contact from './ContactComponent/Contact'
import Footer from './FooterComponenet/Footer'
import Register from './RegisterComponent/Register'
import Login from './LoginComponent/Login'
import UserHome from './UserHomeComponent/UserHome';
import { Routes,Route } from 'react-router-dom';
import AdminHome from './AdminHomeComponent/AdminHome';
import Nav from './NavComponenet/Nav'
import ManageUser from './ManageUserComponenet/ManageUser'
import Logout from './LogoutComponent/Logout'
// import ManageUser from './ManageUserComponenet/ManageUser';
function App() {
  return (
    <div className="">
      
      <Nav/>
      <Header/>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/user" element={<UserHome/>}></Route>
        <Route path="/admin" element={<AdminHome/>}></Route>
        <Route path="/manageuser" element={<ManageUser/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
      </Routes>
      <Banner/>
      <About/>
      <Galery/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      </div>
  );
}

export default App;
