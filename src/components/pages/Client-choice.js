
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';




export default class Employee extends Component {
    render() {
        return (

            <div>
                <br></br>
                 <h1 className="testClass">Welcome to Pride Wedding Service Provider </h1>
                  <h1 className="testClass9">  </h1>
                   <Link to="/addcart">
                    <h2 className="testClass5"> | CREATE YOUR WEDDING CART| </h2>
                   </Link>
                  <h3 className="testClass5">OR</h3>
                  <Link to="/client-selection-2">
                   <h2 className="testClass5"> | WATCH WEDDING ADVERTISMENTS| </h2>
                  </Link>
               
           </div> 
     
        );
    }
}