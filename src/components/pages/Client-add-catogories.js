import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './selection.css';




export default class Employee extends Component {
    render() {
        return (
            
        <div>
        
            <div>
              <div class="position-absolute top-left"> 
                 <p class="new2"> **** WELL DONE! **** </p> 
                  <p class="new2">ADDVERTISMENT CATEGORIES </p> 
              </div> 
              <h1 className="testClassNull">  </h1>
              <br></br>
              <br></br>
              <div class="position-absolute mid-left"> 
              <Link to="/hotels"> 
                 <button type="button" class="new3">HOTEL AND CATERING</button> 
              </Link>
              </div> 
              <div class="position-absolute mid-center"> 
              <Link to="/saloons"> 
                 <button type="button" class="new3">SALOON</button> 
               </Link>
              </div> 
              <div class="position-absolute mid-right"> 
              <Link to="/Photographers"> 
                 <button type="button" class="new3">PHOTOGRAPGHY</button> 
               </Link>
              </div> 
  
              <div class="position-absolute bottom-left"> 
              <Link to="/jwellers"> 
                 <button type="button" class="new3">JEWELLERY</button> 
                 </Link>
              </div> 
              <div class="position-absolute bottom-center"> 
              <Link to="/decorators"> 
                 <button type="button" class="new3" >DECORATIONS</button> 
                </Link>
              </div> 
              <div class="position-absolute bottom-right"> 
              <Link to="/entertainers"> 
                 <button type="button" class="new3">ENTERTAINMENT</button> 
                 </Link>
              </div> 
            </div> 
        </div> 
     
        );
    }
}
