import React, { useState,useEffect } from 'react'
import { NameValidation } from "./Validation.jsx/NameValidation";
import { positionValidation,companyValidation } from './Validation.jsx/PositionCompanyValidation';
import { addressValidation } from "./Validation.jsx/AddressValidation";
import { CityRegionValidation } from "./Validation.jsx/CityRegionValidation";
import { postalValidation } from './Validation.jsx/PostalCountryValidation';
import { EmailValidation,PhoneValidation } from './Validation.jsx/EmailPhoneValidation';


const Form = () => {

    const h1Color = {
        color: "rgb(91, 1, 91)",
    }


    // Name onchange attribute
    const [ userName,setUserName ] = useState("");
    const [ userLastName,setUserLastName ] = useState("");
    const [ userTitle,setUserTitle ] = useState("");

    const handleName = (event) => {
        setUserName(event.target.value);
    }

    const handleLastName = (event) => {
        setUserLastName(event.target.value);
    }

    const handleTitle = (event) => {
        setUserTitle(event.target.value)
    }

    // position and company onchange attribute
    const [ userPosition,setUserPosition ] = useState("");
    const [ userCompany,setUserCompany ] = useState("");

    const handleUserPosition = (event) => {
        setUserPosition(event.target.value);
    }

    const handleUserCompany = (event) => {
        setUserCompany(event.target.value);
    }

    // street address and street address line 2
    const [ streetAddress,setStreetAddress ] = useState("");
    const [ streetAddress2,setStreetAddress2 ] = useState("");

    const handleStreetAddress = (event) => {
        setStreetAddress(event.target.value);
    }

    const handleStreetAddress2 = (event) => {
        setStreetAddress2(event.target.value)
    }

    // city and region
    const [ userCity,setUserCity ] = useState("");
    const [ userRegion,setUserRegion ] = useState("");

    const handleUserCity = (event) => {
        setUserCity(event.target.value)
    }

    const handleUserRegion = (event) => {
        setUserRegion(event.target.value)
    }

    // zip code and country
    const [ userZipCode,setUserZipCode ] = useState("");
    const [ userCountry,setUserCountry ] = useState("");

    const handleUserZipCode = (event) => {
        setUserZipCode(event.target.value);
    }

    const handleUserCountry = (event) => {
        setUserCountry(event.target.value);
    }

    // email and phone
    const [ userEmail,setUserEmail ] = useState("");
    const [ userPhoneNo,setUserPhoneNo ] = useState("");

    const handleUserEmail = (event) => {
        setUserEmail(event.target.value);
    }

    const handleUserPhoneNo = (event) => {
        setUserPhoneNo(event.target.value);
    }

    // handle submit and display error message

    const [ nameErrorMessage,setNameErrorMessage ] = useState("");
    const [ lastNameErrorMessage,setLastNameErrorMessage ] = useState("");
    const [ positionErrorMessage,setPositionErrorMessage ] = useState("");
    const [ companyErrorMessage,setCompanyErrorMessage ] = useState("");
    const [ addressErrorMessage,setAddressErrorMessage ] = useState("");
    const [ addressErrorMessage2,setAddressErrorMessage2 ] = useState("");
    const [ userCityErrorMessage,setUserCityErrorMessage ] = useState("")
    const [ userRegionErrorMessage,setUserRegionErrorMessage ] = useState("");
    const [ userPostalErrorMessage,setUserPostalErrorMessage ] = useState("");
    const [ userEmailErrorMessage,setUserEmailErrorMessage ] = useState("");
    const [ phoneNumErrorMessage,setPhoneNumErrorMessage ] = useState("");

    const [ userInfo,setUserInfo ] = useState({});


    const handleSubmit = () => {

        
        const nameValidity = NameValidation(userName);    
        const lastNameValidity = NameValidation(userLastName);
        const positionValidity = positionValidation(userPosition);
        const companyValidity = companyValidation(userCompany);
        const addressValidity = addressValidation(streetAddress);
        const address2Validity = addressValidation(streetAddress2);
        const cityValidity = CityRegionValidation(userCity);
        const regionValidity = CityRegionValidation(userRegion)
        const postalValidity = postalValidation(userZipCode);
        const emailValidity = EmailValidation(userEmail);
        const phoneValidity = PhoneValidation(userPhoneNo);

        // name
        if (nameValidity){
            setNameErrorMessage("")
        }
        else {
            setNameErrorMessage("Invalid Name");
        }

        if (lastNameValidity){
            setLastNameErrorMessage("")
        }
        else{
            setLastNameErrorMessage("Invalid Last Name")
        }

        // position and company
        if (positionValidity){
            setPositionErrorMessage("");
        }
        else{
            setPositionErrorMessage("Invalid Position");
        }

        if (companyValidity){
            setCompanyErrorMessage("");
        }
        else{
            setCompanyErrorMessage("Invalid Company")
        }

        // Address 

        if (addressValidity){
            setAddressErrorMessage("")
        }
        else{
            setAddressErrorMessage("Invalid Address Line")
        }

        if (address2Validity){
            setAddressErrorMessage2("")
        }
        else{
            setAddressErrorMessage2("Invalid Address Line")
        }

        // city 

        if (cityValidity){
            setUserCityErrorMessage("");
        }
        else{
            setUserCityErrorMessage("Invalid City")
        }

        if (regionValidity){
            setUserRegionErrorMessage("")
        }
        else{
            setUserRegionErrorMessage("Invalid Region")
        }

        // postal/zip validity
        if (postalValidity){
            setUserPostalErrorMessage("")
        }
        else{
            setUserPostalErrorMessage("Invalid Postal Code");
        }

        // email and phone number
        if (emailValidity){
            setUserEmailErrorMessage("");
        }
        else{
            setUserEmailErrorMessage("Invalid Email")
        }

        if (phoneValidity){
            setPhoneNumErrorMessage("");
        }
        else{
            setPhoneNumErrorMessage("Inavlid Phone Number")
        }


        if (nameValidity && lastNameValidity && positionValidity && cityValidity && companyValidity && phoneValidity && postalValidity && emailValidity && regionValidity && addressValidity && address2Validity){

            setUserName("");
            setUserLastName("");
            setUserCompany("");
            setUserCountry("");
            setUserEmail("");
            setUserPhoneNo("");
            setUserPosition("");
            setUserRegion("");
            setUserCity("");
            setStreetAddress("");
            setStreetAddress2("");

            const userInfo = {
                userName,
                userLastName,
                userEmail,
                userCountry,
                userCompany,
                userCity,
                userPosition,
                userPhoneNo,
                userRegion,
                userZipCode,
                streetAddress,
                streetAddress2,
            }

            window.localStorage.setItem("InformationOfUser",JSON.stringify(userInfo));
        }
    }

    useEffect (() => {
        const savedInfo = window.localStorage.getItem("InformationOfUser");

        if (savedInfo){
            setUserInfo(JSON.parse(savedInfo));
        }
    }, [])

  return (
    <div className="backdrop-blur-md bg-white/10 rounded-3xl border-white/30 flex items-center p-[4rem] shadow-xl gap-10 flex-col     md:min-h-[70vh] min-w-[60vw]">
        <h1 style={h1Color} className="text-3xl text-center">Training Registration Form</h1>

        <div className="flex flex-col gap-2">
            <label className="font-bold text-xl">Name:</label>

            <div className="flex gap-5">
                <select name="Title" value={userTitle} onChange={handleTitle} className="rounded-lg h-[5vh] pl-5 bg-purple-200 border-2 border-purple-500 text-md w-[10vw] ">
                  <option value="">Title</option>
                  <option value="Dancer">Dancer</option>
                  <option value="Singer">Singer</option>
                  <option value="Writer">Writer</option>
                </select>
                <div>
                   <input type="text" value={userName} onChange={handleName} className="rounded-lg h-[5vh] px-5 bg-purple-200 border-2 border-purple-500 text-md w-[10vw] " placeholder="First"/>
                   <p className="text-center mt-2 text-red-500">{nameErrorMessage}</p>
                </div>

                <div>
                   <input type="text" value={userLastName} onChange={handleLastName} className="rounded-lg h-[5vh] px-5 bg-purple-200 border-2 border-purple-500 text-md w-[19vw] " placeholder="Last"/>
                   <p className="text-center mt-2 text-red-500">{lastNameErrorMessage}</p>
                </div>
            </div>
        </div>


        <div className="flex  gap-5">
            <div className="flex-col flex  gap-2">
               <label className="font-bold text-xl">Position:</label>
               <input type="text" value={userPosition} onChange={handleUserPosition} className="rounded-lg h-[5vh] px-5 bg-purple-200 border-2 border-purple-500 text-md w-[20vw] "/>
               <p className="text-center text-red-500">{positionErrorMessage}</p>
            </div>


            <div className="flex-col flex gap-2">
               <label className="font-bold text-xl">company:</label>
               <input type="text" value={userCompany} onChange={handleUserCompany} className="rounded-lg h-[5vh] px-5 bg-purple-200 border-2 border-purple-500 text-md w-[20vw] "/>
               <p className="text-center text-red-500">{companyErrorMessage}</p>
            </div>
        </div>


        <div className=" flex flex-col gap-3">

            <div className="flex flex-col gap-2">
                <label className="font-bold text-xl">Address:</label>
                <input type="text" value={streetAddress} onChange={handleStreetAddress} placeholder="Street Address" className="rounded-lg h-[5vh] pl-5 bg-purple-200  border-2 border-purple-500 text-md w-[41.3vw] "/>
                <div className="text-center mt-3">
                  <p className="text-center text-red-500">{addressErrorMessage}</p>
                </div>
            </div>


            <div>
                <input type="text"  value={streetAddress2} onChange={handleStreetAddress2}  placeholder="Street Address Line 2" className="rounded-lg h-[5vh] pl-5 bg-purple-200  border-2 border-purple-500 text-md w-[41.3vw] "/>

                <div className="text-center mt-3">
                  <p className="text-center text-red-500">{addressErrorMessage2}</p>
                </div>
            </div>
        </div>


        <div className="flex flex-col gap-4">

            <div className="flex gap-5">
               <div>
                 <input type="text"  value={userCity} onChange={handleUserCity}  placeholder="City" className="rounded-lg h-[5vh] pl-5 bg-purple-200 border-2 border-purple-500 text-md w-[20vw] "/>
                 <p className="text-center text-red-500 mt-2">{userCityErrorMessage}</p>    
               </div>
               <div>
                  <input type="text" value={userRegion} onChange={handleUserRegion} placeholder="Region" className="rounded-lg h-[5vh] pl-5 bg-purple-200 border-2 border-purple-500 text-md w-[20vw] "/>
                  <p className="text-center text-red-500 mt-2">{userRegionErrorMessage}</p>
               </div>   
            </div>

            <div className="flex gap-5">
                <div>
                  <input type="text" value={userZipCode} onChange={handleUserZipCode}  placeholder="Postal / Zip Code" className="rounded-lg h-[5vh] pl-5 bg-purple-200 border-2 border-purple-500 text-md w-[20vw] "/> 
                  <p className="text-center text-red-500 mt-3">{userPostalErrorMessage}</p>
               </div>   
                <select name="Country" value={userCountry} onChange={handleUserCountry}  className="rounded-lg h-[5vh] pl-5 bg-purple-200 border-2 border-purple-500 text-md w-[20vw] ">
                  <option value="Romania">Romania</option>
                  <option value="Dancer">Nigeria</option>
                  <option value="Singer">Hungary</option>
                  <option value="Writer">Turkey</option>
                </select>        
            </div>
        </div>

        <div className="flex gap-[0.7rem]">
            <div className="flex flex-col">
               <label className="font-bold text-xl">Email:</label>

               <div>
                  <input type="text" value={userEmail} onChange={handleUserEmail}  className="rounded-lg h-[5vh] pl-5 bg-purple-200 border-2 border-purple-500 text-md w-[20vw] "/>    
                  <p className="text-red-500 text-center mt-2">{userEmailErrorMessage}</p>
               </div>
            </div>

            <div className="flex flex-col">
               <label className="font-bold text-xl">Phone:</label>
               <div>
                  <input type="tel" value={userPhoneNo} onChange={handleUserPhoneNo}  placeholder="### ### ####" className="px-5 rounded-lg h-[5vh] pl-5 bg-purple-200 border-2 border-purple-500 text-md w-[20vw] "/>   
                  <p className="text-center text-red-500 mt-3">{phoneNumErrorMessage}</p> 
               </div>
            </div>
        </div>


        <div className="w-[41.7vw] h-[6vh] btnHoverEffect">
            <button onClick={handleSubmit} className="h-[100%] w-[100%] font-bold bg-purple-400 rounded-xl">SEND</button>
        </div>
    </div>
  )
}

export default Form