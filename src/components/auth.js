//
//
//
//
//

import React, { useState, useEffect } from 'react';
import { loginWithPhoneNumber } from "../../firebase/auth_phone_signin";

import '../../scss/main.scss'

export default Auth = () => {
    const [phoneNumber, setPhoneNumber] = useState("");

    useEffect(() => {
      if (phoneNumber.length > 10) {
        console.log("Phone Number changed:", phoneNumber);
      }
    }, [phoneNumber]);
  
    const handlePhoneNumberChange = (event) => {
      setPhoneNumber(event.target.value);
    };

    return (
        <>
            <h1>Auth</h1>
            <input
                className="input"
                type='tel'
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter your phone number"
            />
            <button className='submit' type="submit" onClick={() => { loginWithPhoneNumber(phoneNumber) }}>Submit</button>
            <div id='recaptcha-container'></div>
        </>
    )
}