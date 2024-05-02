//
//
//
//
//

import { StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { loginWithPhoneNumber } from "../firebase/auth_phone_signin";
// import { verifyCode } from '../../firebase/auth_phone_verify_code';

export default AuthPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authMethod, setAuthMethod] = useState("");

  useEffect(() => {
    if (phoneNumber.length > 10) {
      console.log("Phone Number changed:", phoneNumber);
    }
  }, [phoneNumber]);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const changeAuthMethod = () => {
    if (authMethod === "email") {
      setAuthMethod("phone")
    }
    else {
      setAuthMethod("email")
    }
  };

  const setAuth = (phoneNumber) => {
    if (authMethod == "phone") {
      loginWithPhoneNumber(phoneNumber)
    }
    else {
      
    }
  }

  return (
    <View style={styles.container}>
      <h1>Expo auth</h1>
      Chose your auth method
      {authMethod == "email" ?
        <button
          onClick={changeAuthMethod}
        >Email
        </button> :
        <button
          onClick={changeAuthMethod}
        >Phone
        </button>
      }
      {authMethod == "email" ?
        <>
          <input
            type='text'
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <input
            type='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </> :
        <>
          <input
            type='tel'
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter your phone number"
          />
        </>
      }
      <button className='submit' type="submit" onClick={() => {setAuth}}>Submit</button>
      <div id='recaptcha-container'></div>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})