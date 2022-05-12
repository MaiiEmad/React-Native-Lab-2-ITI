import React from "react"
import { Text, View, Button, ScrollView, TouchableOpacity } from "react-native"
import Header from "./Header"
import Card from "./Card"
import Footer from "./Footer"

export default function Home({ navigation }) {
    return (
        <View>

            <Header />
            <ScrollView >
                <TouchableOpacity onPress={() => {
                    navigation.navigate("CardDetails")
                }}>
                    <Card />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("CardDetails")
                }}>
                    <Card />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("CardDetails")
                }}>
                    <Card />
                </TouchableOpacity>
                
            </ScrollView>
            <Footer navigation={navigation}/>
        </View>
    )
}
