import React, { Fragment,useState } from "react";
import { Link } from 'react-router-dom';


import  {ClientLogins}  from '../../authorization/authorization';


      const ClientLogin = (props) => {
        const [formData, setFromData] = useState(
          {
             
              Email: '',
              Password: '',
           
          });
      
        const { Email,Password } = formData;
      
        const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })
      
       const onSubmit = async e => {
        e.preventDefault();
        console.log("Login On Submit function is Working")
        ClientLogins (Email,Password,props);
       };

        return (
          <Fragment>
            <br></br>
            <form onSubmit={e => onSubmit(e)} >
            <h3 className="testClass">Client Log in</h3>

            <div className="form-group">
                <label>Email Address</label>
                <input type="text" className="form-control" placeholder="Email" 
                name="Email"
                value={Email}
                required
                onChange={e => onChange(e)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name="Password"
            value={Password}
            required
            onChange={e => onChange(e)}/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            <input className="font_size" type="submit" className="btn btn-dark btn-lg btn-block" value="Go to My Account" />


              
              <div className="forgot-password text-right">
              <Link to="/Client-Registration">
              sign up
                </Link>
                <span className="p-2">|</span>
                <Link to="/forget-pw">
               Forgot Password
               </Link>
              </div>         
          </form>
          </Fragment>
        );
      };
      export default ClientLogin;