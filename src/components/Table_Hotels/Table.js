import React from "react";
import ReactDOM from "react-dom";
import UseApp from "./UseApp";
import "./index2.css";



export default function Table(){
  return(
  

  <React.StrictMode>

    <div> 
    
    <div  className="testClass">
    DISCOVER YOUR WEDDING HOTELS
    </div>
    <div>Here you can search details of hotels by company name location and packages</div>
   
      <div>
        <UseApp />
      </div>
      </div>
 
  </React.StrictMode>
  
  
);
}
