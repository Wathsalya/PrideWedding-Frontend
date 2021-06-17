import axois from 'axios';
import { Redirect } from "react-router-dom";
//import history from '../components/components/history ';

export const HotelCardDetails = async (CardNo,CardholderName,ExpDate,CVV,props) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({CardNo,CardholderName,ExpDate,CVV });
    if (CardNo === 'null' || CardholderName === 'null' || ExpDate === 'null' || CVV === 'null'  ){
        alert("Please fill Your Credit or Debit Card Information")
    }
    
    else {
        try {
            await axois.post("https://prideweddingapi.azurewebsites.net/api/Payments", body, config);
            alert("Card is being Verified ");
            props.history.push("/hotel_upload");
            
            console.log("Card Data has Successfully Recorded")
    
        } catch (error) {
            alert("Please Check Your Information again ");
            console.log("Card Details are Incorrect");
            console.log(error);
            
        }


    }
};

export const SaloonCardDetails = async (CardNo,CardholderName,ExpDate,CVV,props) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({CardNo,CardholderName,ExpDate,CVV });
    if (CardNo === 'null' || CardholderName === 'null' || ExpDate === 'null' || CVV === 'null'  ){
        alert("Please fill Your Credit or Debit Card Information")
    }
    
    else {
        try {
            await axois.post("https://prideweddingapi.azurewebsites.net/api/Payments", body, config);
            alert("Card is being Verified ");
            props.history.push("/saloon_upload");
            
            console.log("Card Data has Successfully Recorded")
    
        } catch (error) {
            alert("Please Check Your Information again ");
            console.log("Card Details are Incorrect");
            console.log(error);
            
        }


    }
};

export const PhotoCardDetails = async (CardNo,CardholderName,ExpDate,CVV,props) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({CardNo,CardholderName,ExpDate,CVV });
    if (CardNo === 'null' || CardholderName === 'null' || ExpDate === 'null' || CVV === 'null'  ){
        alert("Please fill Your Credit or Debit Card Information")
    }
    
    else {
        try {
            await axois.post("https://prideweddingapi.azurewebsites.net/api/Payments", body, config);
            alert("Card is being Verified ");
            props.history.push("/photographer_upload");
            
            console.log("Card Data has Successfully Recorded")
    
        } catch (error) {
            alert("Please Check Your Information again ");
            console.log("Card Details are Incorrect");
            console.log(error);
            
        }


    }
};

export const JewelleryCardDetails = async (CardNo,CardholderName,ExpDate,CVV,props) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({CardNo,CardholderName,ExpDate,CVV });
    if (CardNo === 'null' || CardholderName === 'null' || ExpDate === 'null' || CVV === 'null'  ){
        alert("Please fill Your Credit or Debit Card Information")
    }
    
    else {
        try {
            await axois.post("https://prideweddingapi.azurewebsites.net/api/Payments", body, config);
            alert("Card is being Verified ");
            props.history.push("/jweller_upload");
            
            console.log("Card Data has Successfully Recorded")
    
        } catch (error) {
            alert("Please Check Your Information again ");
            console.log("Card Details are Incorrect");
            console.log(error);
            
        }


    }
};

export const DecorationCardDetails = async (CardNo,CardholderName,ExpDate,CVV,props) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({CardNo,CardholderName,ExpDate,CVV });
    if (CardNo === 'null' || CardholderName === 'null' || ExpDate === 'null' || CVV === 'null'  ){
        alert("Please fill Your Credit or Debit Card Information")
    }
    
    else {
        try {
            await axois.post("https://prideweddingapi.azurewebsites.net/api/Payments", body, config);
            alert("Card is being Verified ");
            props.history.push("/decoration_upload");
            
            console.log("Card Data has Successfully Recorded")
    
        } catch (error) {
            alert("Please Check Your Information again ");
            console.log("Card Details are Incorrect");
            console.log(error);
            
        }


    }
};

export const EntertainmentCardDetails = async (CardNo,CardholderName,ExpDate,CVV,props) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({CardNo,CardholderName,ExpDate,CVV });
    if (CardNo === 'null' || CardholderName === 'null' || ExpDate === 'null' || CVV === 'null'  ){
        alert("Please fill Your Credit or Debit Card Information")
    }
    
    else {
        try {
            await axois.post("https://prideweddingapi.azurewebsites.net/api/Payments", body, config);
            alert("Card is being Verified ");
            props.history.push("/entertainer_upload");
            
            console.log("Card Data has Successfully Recorded")
    
        } catch (error) {
            alert("Please Check Your Information again ");
            console.log("Card Details are Incorrect");
            console.log(error);
            
        }


    }
};

