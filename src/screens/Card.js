import React from "react"
import { Text,View ,Button,Image,ScrollView} from "react-native"

export default function Card() {
        return(
            <View style={{display:"flex",flexDirection:"row",direction:"rtl",marginVertical:10,backgroundColor:"#fff",borderRadius:10}}>
                <Image source={require("../../assets/2.jpg")} style={{width:200,height:200,marginHorizontal:20,marginVertical:10}}/>
                <View  style={{display:"flex",flexDirection:"column"}}>
                <Text style={{fontSize:14,marginVertical:10,fontWeight:"bold"}}>أيلون ماسك يطرح سيارة تسلا جديده</Text>
                <Text style={{fontSize:14,width:200,padding:20}}> أيلون ماسك يطرح سيارة تسلا جديده أيلون ماسك يطرح سيارة تسلا جديده أيلون ماسك يطرح سيارة تسلا جديده أيلون ماسك يطرح سيارة تسلا جديدهأيلون ماسك يطرح سيارة تسلا جديده</Text>
                </View>
                
            </View>
        )
    }
