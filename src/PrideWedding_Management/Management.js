import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './selection.css';
import img1 from './images/blog.gif';
import img2 from './images/blog.gif';
import hotel from './images/hotel.gif';
import saloon from './images/makeup.gif';
import jwel from './images/jew.gif';
import enter from './images/dj.gif';
import cart from './images/cart.gif';
import photography from './images/photograpghy.gif';
import dec from './images/dec.gif';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Employee extends Component {
    render() {
        return (
           
         
           
            
            
       
        
              <Carousel >

                   <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                    <br></br>
                        <h1 className="display-4">Pride Wedding Service Provider Management Unit</h1>
                        <img src={img1} alt="img"/>
                    </div>
                </div>
            <div className="card-body">
            <div className="myb" > 
              <Link to="/EE5201GroupNumber18-prideweddingHotel"> 
              <img src={img2} alt="img"/>
                 <button type="button" class="new3">HOTEL AND CATERING</button> 
                 <img src={hotel} alt="img"/>
              </Link>
              </div> 
            </div>

            <div className="card-body">
            <div className="myb"> 
           
              <Link to="/EE5201GroupNumber18-prideweddingSaloon" > 
              <img src={img2} alt="img"/>
                 <button type="button" class="new3">SALOON</button> 
                 <img src={saloon} alt="img"/>
               </Link>
            </div> 
            </div>

            <div className="card-body">
            <div className="myb"> 
              <Link to="/EE5201GroupNumber18-prideweddingPhotography"> 
              <img src={img2} alt="img"/>
                 <button type="button" class="new3">PHOTOGRAPGHY</button> 
                 <img src={photography} alt="img"/>
               </Link>
              </div> 
               
            </div>
            <div className="card-body">
            <div className="myb"> 
              <Link to="/EE5201GroupNumber18-prideweddingJwellery" > 
              <img src={img2} alt="img"/>
                 <button type="button" class="new3">JEWELLERY</button> 
                 <img src={jwel} alt="img"/>
                 </Link>
              </div> 
               
            </div>  

            <div className="card-body">
            <div className="myb"> 
              <Link to="/EE5201GroupNumber18-prideweddingDecoration"> 
              <img src={img2} alt="img"/>
                 <button type="button" class="new3" >DECORATIONS</button> 
                 <img src={dec} alt="img"/>
                </Link>
              </div> 
               
            </div>

            <div className="card-body">
            <div className="myb"> 
              <Link to="/EE5201GroupNumber18-prideweddingEntertainment">
              <img src={img2} alt="img"/> 
                 <button type="button" class="new3">ENTERTAINMENT</button> 
                 <img src={enter} alt="img"/>
                 </Link>
              </div> 
            </div>

            <div className="card-body">
            <div className="myb" > 
              <Link to="/EE5201GroupNumber18-prideweddingCart"> 
              <img src={img2} alt="img"/>
                 <button type="button" class="new3">WEDDING CART</button> 
                 <img src={cart} alt="img"/>
                 </Link>
              </div> 
               
            </div>
                
            </Carousel>
              
         
        );
    }
}
