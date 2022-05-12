import React from "react"
import { ImageBackground,View,Text,StyleSheet,Image,ActivityIndicator} from "react-native"

 export default function SplashScreen ({navigation}){
     const goToHome=()=>{
        setTimeout(() => {
            navigation.navigate('Home')
         },2000);

     }
    
        return(
            <View style={styles.container}>
            {goToHome()}
            {/* <ImageBackground style={{flex:1}} source={require('../../assets/icon.png')} /> */}
            <Image source={require("../../assets/2.jpg")} style={{width:200,height:200,borderRadius:100}}/>
            <Text style={{fontSize:30,marginVertical:20}}>ITI OS Track</Text>
            <ActivityIndicator color="white" size="large"/>
            </View>
        )
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems:"center",
          backgroundColor: '#4F5C99',
          padding: 20,
          color:"#fff"
        }
       
      });
      