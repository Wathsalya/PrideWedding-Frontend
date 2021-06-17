import React, { Fragment, useState} from 'react';
import Cards from'react-credit-cards'
//import { Link } from 'react-router-dom';
//import './index.css';
import './payment.css';
import'react-credit-cards/es/styles-compiled.css'
import { HotelCardDetails } from '../../../authorization/vendorpaymentsauth';



function HotelPay(props) {
  const [CardNo, setNumber] = useState('')
  const [CardholderName, setName] = useState('')
  const [ExpDate, setExpiary] = useState('')
  const [CVV, setCvc] = useState('')
  const [focus, setFocus] = useState('')
  console.log("Until On Submit is Working")
 

  const onSubmit = async e => {
    e.preventDefault();
    console.log("On Submit Function is working")
    HotelCardDetails (CardNo,CardholderName,ExpDate,CVV,props);
     
  };
  return(
    <Fragment> 
<div>
<br></br>
  <Cards
  number={CardNo}
  name={CardholderName}
  expiry={ExpDate}
  cvc={CVV}
  focused={focus}
  />
     
  <form  onSubmit={e => onSubmit(e)}>

  <h3 >Payment Details</h3>
  <div class="flex-parent jc-center">
   <span>Please make the payment to join with our service</span>
  </div>  
   <div>
    <div class="flex-parent jc-center">
     <button class="badge badge-danger">  $11.99</button>
    </div>  
   
    <div class="flex-parent jc-center">
        <span class="red margin-right">Per month</span>
    </div>  
    <div class="flex-parent jc-center">
        <span  class="red margin-right">Billed monthly</span>
    </div>
  </div>
  <div className="form">
  <label>Card Number</label>
    <input className="input-text" 
     type='tel' 
    name='number' 
    placeholder='Card Number'
    minLength="16"
    maxLength="16" 
    value={CardNo}
    required
    onChange={e => setNumber(e.target.value)}
    onFocus={e => setFocus(e.target.name)}
    />
    </div>
     <div className="form">
     <label>Cardholder's Name</label>
        <input className="input-text" 
    type='text' 
    name='name' 
    placeholder='Name'
    value={CardholderName}
    required
    minLength='1'
    maxLength='32' 
    onChange={e => setName(e.target.value)}
    onFocus={e => setFocus(e.target.name)}
    />
    </div>
     <div className="form">
     <label>Expiary Date</label>
        <input className="input-text" 
    type='tel' 
    name='exiary' 
    placeholder='MM/YY'
    value={ExpDate}
    required
    minLength='4'
    maxLength='5' 

    onChange={e => setExpiary(e.target.value)}
    onFocus={e => setFocus(e.target.name)}
    />
    </div>
     <div className="form">
     <label>CVV</label>
        <input className="input-text" 
    type='tel' 
    name='cvc' 
    placeholder='CVV'
    value={CVV}
    required
    minLength='3'
    maxLength='3' 

    onChange={e => setCvc(e.target.value)}
    onFocus={e => setFocus(e.target.name)}
    />
    </div>
    <div>
   
    <button type="Submit" className="btn btn-dark btn-lg btn-block">Pay Now</button>
   </div>  
  </form>


</div>
</Fragment> 
  );
}


export default HotelPay;
