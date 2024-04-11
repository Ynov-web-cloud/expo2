//
//
//
//
//

import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
// import Auth from '../src/components/auth'

import { loginWithPhoneNumber } from "../firebase/auth_phone_signin";

import '../scss/main.scss'

export default function App() {
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
    <View style={styles.container}>
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
      {/* <Auth /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
