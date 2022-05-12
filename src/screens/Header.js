import { View, Text, StyleSheet,Linking,Alert} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

const url1="http://www.google.com"


export default class Header extends React.Component  {
 
      openUrl=async(url)=>{
    const isSupported=await Linking.canOpenURL(url);
    if(isSupported){
      await Linking.openURL(url);
    }else{
      Alert.alert(`Don't know to open url go to:${url}`)
    }
  }
    render() {
    return (
        <View style={{ flexDirection: "row-reverse", backgroundColor: "#4F5C99" }} >
            
          <Entypo name="home" size={24} color="black" style={{ margin: 20, color: "white" }} />
   <Text style={{ fontSize: 20, marginVertical: 20, color: "white" }}>أخبار السيارات الكهربية </Text>
   <AntDesign name="google" size={24} color="white" onPress={()=>{
              Linking.openURL(url1)
             }}
             style={{ 
                  position:'fixed',
                  left:10    ,
                  top:10
  

             }}/>
  
    
      </View>
    )
    }
    
    

  }

  const styles = StyleSheet.create({
  
  
    headerFooterStyle: {
      width: '100%',
      height: 50,
      backgroundColor: '#1d3557',
      position: 'fixed',
      top: 0,
     
    },
    textStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        padding: 7,
      },
  });