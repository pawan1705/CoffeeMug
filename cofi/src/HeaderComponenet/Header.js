import './Header.css';
import {useState,useEffect} from 'react';

function Header() {
    const[HeaderContent,setHeaderContent]=useState();
    useEffect(()=>{
        setInterval(()=>{
            if(localStorage.getItem("role")=="admin")
            {
                setHeaderContent(<div>
                    <h1>this is admin section</h1>
                </div>)
            }else if(localStorage.getItem("role")=="user")
            {
                setHeaderContent(
                    <div>
                        <h1>this is user section</h1>
                    </div>
                )
            }
            else{
                setHeaderContent(<div class="header_section">
         <div class="container-fluid">
            <nav class="  bg-info">
                 {/* start */}
                 <div class="container-fluid px-5 d-none d-lg-block">
          <div class="row gx-5">
              <div class="col-lg-4 text-center py-3">
                  <div class="d-inline-flex align-items-center">
                      <i class="bi bi-geo-alt fs-1 text-primary me-3"></i>
                      <div class="text-start">
                          <h6 class="text-uppercase fw-bold">Our Office</h6>
                          <span>16 Street, Indore , India</span>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 text-center border-start border-end py-3">
                  <div class="d-inline-flex align-items-center">
                      <i class="bi bi-envelope-open fs-1 text-primary me-3"></i>
                      <div class="text-start">
                          <h6 class="text-uppercase fw-bold">Email Us</h6>
                          <span>coffeemug@info.com</span>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 text-center py-3">
                  <div class="d-inline-flex align-items-center">
                      <i class="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                      <div class="text-start">
                          <h6 class="text-uppercase fw-bold">Call Us</h6>
                          <span>810 365 1643</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
                 {/* end */}
            </nav>
         </div>
      </div>)

            }
        },2000)
    },[])
  return (
    <div className="Header">
    {/* Header open */}
    {HeaderContent}
    {/* Header close */}
    </div>
  );
}

export default Header;
