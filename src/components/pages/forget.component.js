import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./index.css";
export default class Forget extends Component {

onSubmit=()=>{
    alert("You will recieve Password reset Email shortly")
}

    render() {
        return (
         
            <form>
                <br></br>
                <h3 className="testClass">Forgot Password</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control"
                     placeholder="Enter email"
                     required 
                    />
                </div>
                <Link to= {"/"}> 
                  <button type="submit" onClick={this.onSubmit} className="btn btn-dark btn-lg btn-block">Submit</button>
                  </Link>
            </form>
          
        );
    }
}
