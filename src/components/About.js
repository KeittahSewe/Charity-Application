import React from "react";
import hands from "./hands.jpg"
import "./about.css"

function About() {
    return (
        <div className="about_sec">
        <div className="center-vertical bg-dark">
          <div className="about-us-section bg-light">
             <div className="container">
             <h1 className="title">ABOUT US</h1>
                 <div className="row">
                     <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                         <div className="img-head">
                             <img src={hands} alt="hands"/>
                         </div>
                     </div>
                     <div className="col-12 col-lg-6">
                         <h2 className="text-head">
                             WHO WE ARE?
                         </h2>
                         <div className="break-small mb-2"></div>
                         <p className="text-para">
                             Charity App is a platform that allows to connect with the largest and most effective charities around the world. We help people connect with different organizations.
                             We promote a variety of causes, from wildlife to food relief, we strive to create change everywhere 
                         </p>
                         <div className="row">
                             <div className="col-12 col-md-4 mb-2 mb-md-0">
                                 <div className="box">
                                     <i className="fa fa-globe mb-3"></i>
                                     <h4 className="mb-0">CHARITIES FUNDED</h4>
                                     <p className="mb-0"> 1000+</p>
                                 </div>
                             </div>
                             <div className="col-12 col-md-4 mb-2 mb-md-0">
                                 <div className="box">
                                     <i className="fa fa-funded mb-3"></i>
                                     <h4 className="mb-0">FUNDS RAISED</h4>
                                     <p className="mb-0">KSH11,343,800</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
          </div>
        </div>
     </div>
    )

}

export default About;