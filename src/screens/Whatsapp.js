import React from 'react';
 
import {Linking} from 'react-native';
 
const Whatsapp = () => {
 
  const initiateWhatsApp = () => {
    let url =
      'whatsapp://send?text=Hello&phone=+201551482148' ;
    Linking.openURL(url)
      .then(()=> {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };
 
  return (
    initiateWhatsApp()
  );
};
 
export default Whatsapp;