// In App.js in a new project

import * as React from 'react';
import { View, Text,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./src/screens/splashScreen"
import Home  from './src/screens/Home';
import About from "./src/screens/About";
import Whatsapp from './src/screens/Whatsapp';
import CardDetails from './src/screens/CardDetails';
const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Whatsapp" component={Whatsapp} />
        <Stack.Screen name="CardDetails" component={CardDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;