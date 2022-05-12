import React from "react"
import { Text,View ,Button,StyleSheet} from "react-native"
export default class About extends React.Component{
    render(){
        return(
            <View style={{ 
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
                }}>
                <Text>Hello From About </Text>
                
            </View>
        )
    }
}
