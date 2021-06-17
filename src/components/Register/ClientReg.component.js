import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import  {ClientRegistration}  from '../../authorization/authorization';

const ClientRegister = (props) => {
  const [formData, setFromData] = useState(
    {
        ClientNIC: '',
        FirstName: '',
        LastName: '',
        Address: '',
        UserName: '',
        Email: '',
        MobileNo: '',
        Password: '',
        ConfirmPassword: '',
    });

  const {ClientNIC, FirstName, LastName, Address, UserName,Email,MobileNo,Password,  ConfirmPassword} = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })

 const onSubmit = async e => {
  e.preventDefault();
  console.log("On Submit Function is working")
   ClientRegistration (ClientNIC, FirstName, LastName, Address, UserName,Email,MobileNo,Password, ConfirmPassword,props);
    


};

  return (
    <Fragment>
      <br></br>
      <form  onSubmit={e => onSubmit(e)}>
        
      <h3  className="testClass" >CLIENT REGISTRATION </h3>
         <h3 className="form_text">Create a new account</h3>
         <div class="flex-parent jc-center">
   <span>Your Account will be valied only for three months</span>
  </div>  

        <div className="form-group">
        <label>Client NIC No</label>
          <input className="form-control"
            type="text"
            name="ClientNIC"
            placeholder="Client NIC No"
            value={ClientNIC} pattern="(?=.*\d).{9,12,}" title="Must enter Your 9 digit Old NIC Number (without V or X) or 12 digit New NIC Number"
            required
            minLength="9"
            maxLength="12"
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group">
        <label>First Name</label>
          <input className="form-control"
            type="text"
            placeholder="First Name"
            name="FirstName"
            value={FirstName}
            required
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
        <label>Last Name</label>
          <input className="form-control"
            type="text"
            placeholder="Last Name"
            name="LastName"
            value={LastName}
            required
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>
        <div className="form-group">
        <label>Address</label>
          <input className="form-control"
            type="text"
            placeholder="Address"
            name="Address"
            value={Address}
            required
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>

        <div className="form-group">
        <label>Username</label>
          <input className="form-control"
            type="text"
            placeholder="Username"
            name="UserName"
            value={UserName}
            required
            minLength="3" title="Must be contain 3 Charactors"
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>

        <div className="form-group">
        <label>Email</label>
          <input className="form-control"
            type="email"
            placeholder="Email"
            name="Email"
            value={Email}
            required
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>

        <div className="form-group">
          <label>Mobile No</label>
          <input className="form-control"
            type="text"
            placeholder="MobileNo"  pattern="(?=.*\d).{10,}" title="Must enter Your 10 digit Mobile Number"
            name="MobileNo"
            value={MobileNo}
            pattern="(?=.*\d).{10,}" title="Must enter Your 10 digit Mobile Number"
            required
            maxLength ="10"
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>



        <div className="form-group">
        <label>Password</label>
          <input className="form-control"
            type="password"
            placeholder="Password"
            name="Password"
            value={Password}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 3 or more characters" required
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input className="form-control"
            type="password"
            placeholder="Confirm Your Password"
            name="ConfirmPassword"
            value={ConfirmPassword}
            required
            onChange={e => onChange(e)}
          />
        </div>

        <input type="submit" className="btn btn-dark btn-lg btn-block"value="Register As Client" />
       


      <Link to="/sign-in">
         <p className="forgot-password text-right">Already registered <a href="#">log in?</a></p>
      </Link>



     </form>
     
    </Fragment>
  );
};

export default ClientRegister;
