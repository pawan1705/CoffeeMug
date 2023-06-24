import './Banner.css';

function Banner() {
  return (
    <div className="Banner">
      <div class="banner_section layout_padding">
         <div class="container">
            <div id="main_slider" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <div class="row">
                        <div class="col-sm-12">
                           <div class="banner_taital">
                              <h1 class="outstanding_text">Outstanding</h1>
                              <h1 class="coffee_text">Coffee Shop</h1>
                              <p class="there_text"> “Today’s good mood is sponsored by coffee.” </p>
                              <div class="learnmore_bt"><a href="#">Learn More</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="row">
                        <div class="col-sm-12">
                           <div class="banner_taital">
                              <h1 class="outstanding_text">Outstanding </h1>
                              <h1 class="coffee_text">Coffee Shop</h1>
                              <p class="there_text">“Science may never come up with a better office communication system than the coffee break.” </p>
                              <div class="learnmore_bt"><a href="#">Learn More</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="row">
                        <div class="col-sm-12">
                           <div class="banner_taital">
                              <h1 class="outstanding_text">Outstanding </h1>
                              <h1 class="coffee_text">Coffee Shop</h1>
                              <p class="there_text">“When my blood runs black as the moonless night, and my heartbeat sounds as the Warriors march, only then may you say, I’ve had enough coffee.” </p>
                              <div class="learnmore_bt"><a href="#">Learn More</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
               <i class="fa fa-angle-left"></i>
               </a>
               <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
               <i class="fa fa-angle-right"></i>
               </a>
            </div>
         </div>
      </div>
    </div>
  );
}

export default Banner;
