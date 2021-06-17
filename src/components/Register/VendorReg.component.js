import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import './VenderReg.css';


import  {VendorRegistration}  from '../../authorization/authorization';

const VendorRegister = (props) => {
  const [formData, setFromData] = useState(
    {
        CompanyName: '',
        CompanyCategory: '',
        TelephoneNo: '',
        UserName: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
    });

  const {CompanyName, CompanyCategory, TelephoneNo, UserName,Email, Password,  ConfirmPassword} = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })

 const onSubmit = async e => {
  e.preventDefault();
  console.log("Vendor On Submit function is Working")
  VendorRegistration (CompanyName, CompanyCategory, TelephoneNo, UserName,Email,Password, ConfirmPassword, props);
    


};

  return (
    <Fragment>
      <br></br>
      <form  onSubmit={e => onSubmit(e)}>
        
        <h3  className="testClass" >VENDOR REGISTRATION </h3>
         <h3 className="form_text">Create a new account</h3>
        
        <div className="form-group">
        <label>Company Name</label>
          <input className="form-control"
            type="text"
            placeholder="Company Name"
            name="CompanyName"
            value={CompanyName}
            required
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group">
        <label>Company Category   
        <select className="form-control"
        
        placeholder="Company Category"
        name="CompanyCategory"
        value={CompanyCategory}
        required
        onChange={e => onChange(e)}>
            <option value="Hotel and Catering" >Hotel and Catering</option>
            <option value="Saloon">Saloon</option>
            <option value="Photography" >Photography</option>
            <option value="Jwelleries" >Jewellery</option>
            <option value="Decorations">Decorations</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </label>
     
            

      
        </div>
        <div className="form-group">
        <label>Telephone Number</label>
          <input className="form-control"
            type="text"
            placeholder="Telephone Number" pattern="(?=.*\d).{10,}" title="Must enter Your 10 digit Mobile Number"
            name="TelephoneNo"
            value={TelephoneNo} 
            pattern="(?=.*\d).{10,}" title="Must enter Your 10 digit Mobile Number"
            required
            maxLength ="10"
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
            minLength="3" title="Must be contain 3 charactors"
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
            onChange={e => onChange(e)}
          />
        </div>
        
        
         <input className="font_size" type="submit" className="btn btn-dark btn-lg btn-block" value="Register as a Vendor" />


         <Link to="sign-in-vendor">
           <p className="forgot-password text-right">Already registered <a href="#">log in?</a></p>
         </Link>        
     </form>
    </Fragment>
  );
};

export default VendorRegister;
