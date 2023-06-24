import './App.css';
import Header from './HeaderComponenet/Header'
import Banner from './BannerComponent/Banner'
import About from './AboutComponenet/About'
import Galery from './GaleryComponenet/Galery'
import Services from './ServicesComponenet/Services';
import Testimonial from './TestimonialComponenet/Testimonial'
import Contact from './ContactComponent/Contact'
import Footer from './FooterComponenet/Footer'
function App() {
  return (
    <div className="">
      <Header/>
      <Banner/>
      <About/>
      <Galery/>
      <Services/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      </div>
  );
}

export default App;
