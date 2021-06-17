import React, { Fragment,useState,useForm } from "react";
import { Link } from 'react-router-dom';


import  {VendorLogins}  from '../../authorization/authorization';


      const VendorLogin = (props) => {
        const [formData, setFromData] = useState(
          {
             
              UserName: '',
              Password: '',
           
          });
      
        const { UserName,Password } = formData;
      
        const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })
       
       const onSubmit = async e => {
        e.preventDefault();
        console.log("Login On Submit function is Working")
        VendorLogins (UserName,Password,props);
       };

        return (
          <Fragment>
            <br></br>
            <form onSubmit={e => onSubmit(e)} >
            <h3 className="testClass">Vendor Log in</h3>

            <div className="form-group">
                <label>Email Address</label>
                <input type="text" className="form-control" placeholder="Email" 
                name="UserName"
                value={UserName}
                onChange={e => onChange(e)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name="Password"
            value={Password}
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
              <Link to="/Vendor-Registration">
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
      export default VendorLogin;