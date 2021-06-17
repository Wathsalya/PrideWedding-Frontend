import axois from 'axios';
import { Redirect } from "react-router-dom";
//import history from '../components/components/history ';

export const ClientRegistration = async (ClientNIC, FirstName, LastName, Address, UserName,Email,MobileNo,Password,  ConfirmPassword,props) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ClientNIC, FirstName, LastName, Address, UserName,Email,MobileNo,Password,  ConfirmPassword});

    if (Password!== ConfirmPassword){
        alert("Password didn't Match Try again...")
    }

  else {


        try {
            await axois.post("https://prideweddingapi.azurewebsites.net/api/Accounts/ClientRegister", body, config).then((res)=>{
                
                console.log(res);
                if(res.status===201)
                {
                    alert("Your Have Successfully Registered ");
                    console.log("Client Registration is Successful")
                    props.history.push("/sign-in");
                   
                }
                else
                {
                    alert("This Email is found in the database. Please enter different Email or use Sign in instead ");
                   // alert("Please Check Your Information again ");
                   console.log("Duplicate Email was found"); 
                   console.log("Client Registration is Unsuccessful");
                    
                    
                }
            
            }).catch((err)=>{
                alert("Unable to Connect to Database Server");
                console.log(err);
                console.error(err);
                console.log("There is an error in Client Registration ")
            })
           // alert("Your Have Successfully Registered ");
            //console.log("Client Registration is Successful")
                   
        } catch (error) {
            alert("Unable to Connect to Database Server");
            console.log("Client Registration is Unsuccessful");
            console.log(error);
            
        }




    }

};

export const VendorRegistration = async (CompanyName, CompanyCategory, TelephoneNo, UserName,Email, Password,  ConfirmPassword, props) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({CompanyName, CompanyCategory, TelephoneNo, UserName,Email, Password,  ConfirmPassword});

    if (Password!== ConfirmPassword){
        alert("Password didn't Matched Try again..")
    }

  else {


        try {
            await axois.post("https://prideweddingapi.azurewebsites.net/api/Accounts/VendorRegister", body, config);
            alert("Your Have Successfully Registered ");
            
            console.log("Vendor Registration is Successful")
            props.history.push("/sign-in-vendor");
    
        } catch (error) {
            alert("Please Check Your Information again ");
            console.log("Vendor Registration is Unsuccessful");
            console.log(error);
            
        }




    }
};


export const CardDetails = async (CardNo,CardholderName,ExpDate,CVV,props) => {
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
            
            
            console.log("Card Data has Successfully Recorded")
            props.history.push("/client-selection-1");
    
        } catch (error) {
            alert("Please Check Your Information again ");
            console.log("Card Details are Incorrect");
            console.log(error);
            
        }


    }
};

export const ClientLogins = async (Email, Password,props) => {
    
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ Email, Password });

            try {
                await axois.post("https://prideweddingapi.azurewebsites.net/api/Accounts/Login", body, config).then((res)=>{
                   
              
                    console.log(res);
                    if(res.status===200)
                    {
                    
                        alert("Your Have Successfully Logged in ");
                        console.log("Client Login is Successful");
                        props.history.push("/client-services");
                    }
                    
                    else
                    {
                        alert(" Check your Email or Password");
                        alert("Please Check Your Information again ") 
                       console.log("Client Login is Unsuccessful");
                        
                        
                    }
                
                }).catch((err)=>{
                    alert(" Access Denied! Please Check your Email or Password");
                    console.log(err);
                    console.error(err);
                    console.log("There is an error in Client Login ")
                })
               // alert("Your Have Successfully Registered ");
                //console.log("Client Registration is Successful")
                       
            } 
            catch (error) {
                //alert(" Access Denied! Please Check your Email or Password");
               // console.log("Client Login is Unsuccessful");
               // console.log(error);
                
      }
    };
    
    
      export const VendorLogins = async (Email, Password,props) => {
    
        const config = {
            headers: { "Content-Type": "application/json" }
        };
    
        const body = JSON.stringify({ Email, Password });
    
                try {
                    await axois.post("https://prideweddingapi.azurewebsites.net/api/Accounts/Login", body, config).then((res)=>{
                       
                  
                        console.log(res);
                        if(res.status===200)
                        {
                        
                            alert("Your Have Successfully Logged in ");
                            console.log("Vendor Login is Successful");
                          //  <Redirect to="/saloons" />;;
                            props.history.push("/merchentadd");
                        }
                        
                        else
                        {
                            alert(" Check your Email or Password");
                            alert("Please Check Your Information again ") 
                           console.log("Vendor Login is Unsuccessful");
                            
                            
                        }
                    
                    }).catch((err)=>{
                        alert(" Access Denied! Please Check your Email or Password");
                        console.log(err);
                        console.error(err);
                        console.log("There is an error in Vendor Login ")
                    })
                   // alert("Your Have Successfully Registered ");
                    //console.log("Client Registration is Successful")
                           
                } 
                catch (error) {
                    //alert(" Access Denied! Please Check your Email or Password");
                   // console.log("Client Login is Unsuccessful");
                   // console.log(error);
                    
          }
    
    
 };



 export const NewsTeller = async (FirstName,LastName,Email,props) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({FirstName,LastName,Email });
    if (FirstName === 'null' || LastName === 'null' || Email === 'null'  ){
        alert("Please Fill this Field")
    }
    
    else {
        try {
            await axois.post("https://prideweddingapi.azurewebsites.net/api/NewsTellers", body, config);
            alert("Details being Verified ");
            
            
            console.log("Your Subscription is Done")
            props.history.push("/selection");
    
        } catch (error) {
            alert("Please Check Your Information again ");
            console.log("Details are Incorrect");
            console.log(error);
            
        }


    }
};







