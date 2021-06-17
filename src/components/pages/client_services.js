import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Wedding from "./video/pride_wedding-c.mp4";
import './clientservices.css';
import img1 from './images/plan.jpg';


export default class Employee extends Component {
    render() {
        return (
            
<form>
  <div>
  <br></br>
  <video autoPlay loop muted
            style={{
                
                width: "100%",
                objectFit: "fill",
                transform: "translate (-50%, -50%)",
                zIndex: "-1"  
                
                
            } }
            >
                <source src={Wedding} type="video/mp4" />
            </video>  

              <form>
              <div className=" text-justify bottom"> 
              <div className="textvideo">
                  <h3 className="topic">Plan Your Dream Wedding With...</h3>
                 <h3 className="topic2"> PRIDE WEDDING SERVICE PROVIDERS </h3> 


          
           <h7 className="para"> With our eye for detail, Pride Wedding Planners in Sri Lanka will look after every requirement that counts for a picture-perfect wedding. From consultation to complete wedding planning, we provide a function of any size, scheduled to take place in any location. Clients are capable of choosing their needs under our offered categories according to their wish as well as concerning about their budget. Here our website facilitates a filtering process under cost of packages, service providing area (location based), and also the rating gained by the vendors.
            Our Website pursue basically two facilities for a client. You can serach for vendors of provided facilities as well as you can create your own cart with the given discounted packages. the cart item discount will be only valied if you purchase through the website.</h7>   
                  <br></br>
                  <br></br>
                  <Link to="/pay">
                  < button type="submit" className="btn btn-dark btn-lg btn-block">Plan Your Wedding </button>
                  </Link>
                  <br></br>
                  <h7 className="para"> If you have any clarification contact Pride Wedding Service Providers. We provide 24h service. You may replied within 2 Hours. </h7>   
                  <Link to="/contact-form">
                  < button type="submit" className="btn btn-dark btn-lg btn-block">Contact Us </button>
                  </Link>
                  <br></br>
              </div>
              </div> 
             
              </form> 
              <img src={img1} alt="img1" />      
              </div>            
        </form> 
     
        );
    }
}
