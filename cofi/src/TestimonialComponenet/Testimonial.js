
import './Testimonial.css';

function Testimonial() {
  return (
    <div className="Testimonial">
      <div class="client_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <h1 class="client_taital">Testimonial</h1>
                  <p class="client_text">Eeven slightly believable. If you are going to use a coffee of tea, you need to</p>
               </div>
            </div>
         </div>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="client_section_2">
                <div class="container">
                   <div class="row">
                      <div class="col-md-12">
                         <div class="testimonial_section_2">
                            <h4 class="client_name_text">Monahasa <span class="quick_icon"><img src="assets/images/quick-icon.png"/></span></h4>
                            <p class="customer_text">Today I stopped in Cup of dreams and was not disappointed. It’s very clean, it seems like it would be a great environment bring your laptop and work. I got the mocha cappuccino with whipped cream and it is so smooth and creamy. I will definitely be going back to try the Boba tea.</p>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="client_section_2">
                <div class="container">
                   <div class="row">
                      <div class="col-md-12">
                         <div class="testimonial_section_2">
                            <h4 class="client_name_text">Rajmola <span class="quick_icon"><img src="assets/images/quick-icon.png"/></span></h4>
                            <p class="customer_text">We heard about this place a week before their opening and only finally visited. We should have gone sooner! The cappuccino was smooth and the foamed milk and cream was piled high! A perfect place to visit on a rainy autumn Sunday. The place is clean and new which is great, and they have comfortable couches to sit at. Reasonably priced too. We’ll definitely be coming back!</p>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="client_section_2">
                <div class="container">
                   <div class="row">
                      <div class="col-md-12">
                         <div class="testimonial_section_2">
                            <h4 class="client_name_text">Husnain <span class="quick_icon"><img src="assets/images/quick-icon.png"/></span></h4>
                            <p class="customer_text">Have been waiting all summer for them to open to finally have a walkable place to grab a weekend coffee. It was absolutely spotless, my cappuccino was the best I’ve ever had & the prices are incredible for the quality! Also loved that they reduce plastic waste by sealing the iced beverage cups instead of using lids. I’d give ten stars if I could</p>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Testimonial;
