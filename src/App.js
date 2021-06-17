import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import React, { Component } from './images';
//import { Route } from 'react-router';
//import { Layout } from './components/Layout';
//import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';
import Addcart from "./components/Addcart";
import Cart_upload from "./components/Upload/Cart_upload";
import Addtocart from "./components/Addtocart";
import Sum from "./components/Sum";

import Table1 from "./components/Table_Hotels/Table";
import Table2 from "./components/Table_Saloons/Table";
import Table3 from "./components/Table_Decoraters/Table";
import Table4 from "./components/Table_Photographers/Table";
import Table5 from "./components/Table_Jwellers/Table";
import Table6 from "./components/Table_Entertainers/Table";

import './App.css';
import "./index.css"; 
import './custom.css'
import "./components/pages/welcome.css";
import "./components/pages/selection.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./components/pages/welcome.component";
import Verify_Login_1 from "./components/Login/login.component";
import Verify_Login_2 from "./components/Login/login2.component";
import Signin from "./components/Login/signin.component";

import Selection from "./components/pages/selection.component";
import Path from "./components/pages/path.component";
import Client_Selection_2 from "./components/pages/Client-add-catogories";
import Client_Selection_1 from "./components/pages/Client-choice";
import Client_Services from "./components/pages/client_services";

import Contactinfo from "./components/pages/contactinfo.component";
import ContactUs from "./components/pages/contacform";
import Order from "./components/pages/order";

//import MerchentSignup from "./components/merchentregister.component";
import MerchentAdd from "./components/pages/merchentadd.component";

import Upload from "./components/upload.component";
import Uploading from "./upload";

import Saloon_upload from "./components/Upload/Saloon_upload";
import AddBoard_Saloon from "./components/Addboard/AddBoard_Saloon";
import Hotel_upload from "./components/Upload/Hotel_upload";
import AddBoard_Hotel from "./components/Addboard/AddBoard_Hotel";
import Decoration_upload from "./components/Upload/Decoration_upload";
import AddBoard_Decoration from "./components/Addboard/AddBoard_Decoration";
import Photographer_upload from "./components/Upload/Photographer_upload";
import AddBoard_Photography from "./components/Addboard/AddBoard_Photography";
import Jweller_upload from "./components/Upload/Jweller_upload";
import AddBoard_Jweller from "./components/Addboard/AddBoard_Jweller";
import Entertainer_upload from "./components/Upload/Entertainer_upload";
import AddBoard_Entertainer from "./components/Addboard/AddBoard_Entertainer";

import Newcarousel from "./components/pages/newcar";
import ClientRegister from "./components/Register/ClientReg.component";
import VendorRegister from "./components/Register/VendorReg.component";
import SignUp from "./components/Register/signup.component";

import Payment from "./components/pages/payment.component";
import HotelPay from "./components/pages/Vendor_Payments/hotelpayment.component";
import SaloonPay from "./components/pages/Vendor_Payments/saloonpay.component";
import PhotoPay from "./components/pages/Vendor_Payments/photopay.component";
import JwelleryPay from "./components/pages/Vendor_Payments/Jwellerypay.component";
import DecorationPay from "./components/pages/Vendor_Payments/decorationpay.coponent";
import EntertainmentPay from "./components/pages/Vendor_Payments/entertainmentpay.component";

import Forget from "./components/pages/forget.component";
import How_it_works from "./components/pages/how_it_works/how_it_works";
import Navbar from "./components/layout/NavMenu";
import Footer from "./components/layout/Footer"
import Testimonials from "./components/pages/Testimonials";
import Services from "./components/pages/Services/Services";
import Terms from './components/pages/Terms/Terms';
import Privacy from "./components/pages/Privacy/Privacy";

import PrideWeddingSaloon from "./PrideWedding_Management/Group18_Admin_Management/PrideWedding-Saloon";
import PrideWeddingHotel from "./PrideWedding_Management/Group18_Admin_Management/PrideWedding-Hotel";
import PrideWeddingDecoration from "./PrideWedding_Management/Group18_Admin_Management/PrideWedding-Decoration";
import PrideWeddingPhotography from "./PrideWedding_Management/Group18_Admin_Management/PrideWedding-Photography";
import PrideWeddingJwellery from "./PrideWedding_Management/Group18_Admin_Management/PrideWedding-Jwellery";
import PrideWeddingEntertainment from "./PrideWedding_Management/Group18_Admin_Management/PrideWedding-Entertainment";
import PrideWeddingCart from "./PrideWedding_Management/Group18_Admin_Management/PrideWedding-Cart";
import Management from "./PrideWedding_Management/Management";




//import react from 'react';

/*export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}*/

function App() {
  return (<Router>
             <div className="outer">
          <div className="inner">
        <Navbar />
          <Switch>
            <Route exact path='/' component={Selection} />
            <Route path="/selection" component={Selection} />
            <Route path="/register" component={Welcome} />
            <Route path="/path" component={Path} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/client-services" component={Client_Services} />
           
            <Route path="/addcart" component={Addcart} />
            <Route path="/sum" component={Sum} />
            
            <Route path="/merchentadd" component={MerchentAdd}/>
            <Route path="/verify-login" component={Verify_Login_1} />
            <Route path="/sign-in-vendor" component={Verify_Login_2} />
            <Route path="/client-selection-1" component={Client_Selection_1} />
            <Route path="/client-selection-2" component={Client_Selection_2} />
            <Route path="/sign-in" component={Signin}/>
            <Route path="/contact-info" component={Contactinfo}/>
            <Route path="/contact-form" component={ContactUs}/>
            <Route path="/client-order" component={Order}/>
            
            <Route path="/upload" component={Upload}/>
			     
            
			      <Route path="/cart_upload" component={Cart_upload}/>
            <Route path="/addtocart" component={Addtocart} />
            <Route path="/table1" component={Table1} />
            <Route path="/table2" component={Table2} />
            <Route path="/table3" component={Table3} /> 
            <Route path="/table4" component={Table4} />
            <Route path="/table5" component={Table5} />
            <Route path="/table6" component={Table6} />


			      <Route path="/saloon_upload" component={Saloon_upload}/>
            <Route path="/saloons" component={AddBoard_Saloon}/>
		        <Route path="/hotel_upload" component={Hotel_upload}/>
            <Route path="/hotels" component={AddBoard_Hotel}/>
		        <Route path="/photographer_upload" component={Photographer_upload}/>
            <Route path="/Photographers" component={AddBoard_Photography}/>
		        <Route path="/decoration_upload" component={Decoration_upload}/>
            <Route path="/decorators" component={AddBoard_Decoration}/>
		        <Route path="/jweller_upload" component={Jweller_upload}/>
            <Route path="/jwellers" component={AddBoard_Jweller}/>
		        <Route path="/entertainer_upload" component={Entertainer_upload}/>
            <Route path="/entertainers" component={AddBoard_Entertainer}/>
			
			
            <Route path="/aboutus" component={Newcarousel}/>
            <Route path="/uploading" component={Uploading}/>
            
            <Route path="/pay" component={Payment}/>
            <Route path="/hotelpay" component={HotelPay}/>
            <Route path="/saloonpay" component={SaloonPay}/>
            <Route path="/photographypay" component={PhotoPay}/>
            <Route path="/jwellerypay" component={JwelleryPay}/>
            <Route path="/decorationpay" component={DecorationPay}/>
            <Route path="/entertainmentpay" component={EntertainmentPay}/>

            <Route path="/forget-pw" component={Forget}/>       
            <Route path="/testimonials" component={Testimonials}/>
            <Route path="/how-it-works" component={How_it_works}/>
            <Route path="/services" component={Services}/>
            <Route path="/terms" component={Terms}/>
            <Route path="/privacy" component={Privacy}/>

            <Route path="/Client-Registration" component={ ClientRegister}/>
            <Route path="/Vendor-Registration" component={ VendorRegister}/>

            <Route path="/EE5201GroupNumber18-prideWeddingCart" component={PrideWeddingCart}/>
            <Route path="/EE5201GroupNumber18-prideweddingEntertainment" component={PrideWeddingEntertainment} />
            <Route path="/EE5201GroupNumber18-prideweddingJwellery" component={PrideWeddingJwellery} />
            <Route path="/EE5201GroupNumber18-prideweddingPhotography" component={PrideWeddingPhotography} />
            <Route path="/EE5201GroupNumber18-prideweddingDecoration" component={PrideWeddingDecoration} /> 
            <Route path="/EE5201GroupNumber18-prideweddingHotel" component={PrideWeddingHotel} />
            <Route path="/EE5201GroupNumber18-prideweddingSaloon" component={PrideWeddingSaloon} />
            <Route path="/EE5201GroupNumber18-prideweddingManagement" component={Management} />


            
          </Switch>
          </div> </div> 
          <Footer/>
    </Router>
    
  );
}

export default App;