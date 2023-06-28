import './About.css';
// import axios from 'axios';

function About() {
   // const test=()=>{
   //    axios.get("http://localhost:3002/user/").then
   //    ((result)=>{
   //       console.log(result);
   //    })
   // }
  return (
    <div className="About">
      <div class="about_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <div class="about_taital_main">
                     <div class="about_taital">About Us</div>

      {/* <div>
         <h1>API Test</h1>
         <button onClick={test}>click here to make upi work</button>
      </div> */}


                     <p class="about_text">Full cleaning and housekeeping services for companies and households.</p>
                     <p class="about_text">Our main goal since we began has remained basic: acquaint our clients with the domains we specifically purchase our extraordinary-tasting coffee from, broil the beans with consideration, and make astounding coffee increasingly available through our bistros and our site. The coffee we cook is the coffee we like to drink, and we trust you like it as well.</p>
                     <div class="read_bt"><a href="#">Read More</a></div>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="about_img"><img src="assets/images/about-img.png"/></div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

export default About;
