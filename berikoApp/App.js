
import { StatusBar } from 'expo-status-bar';
import { Alert,View, Text, Image, ScrollView, TextInput,StyleSheet,TouchableHighlight,TouchableOpacity,} from 'react-native';
import BerikoSVGComponent from './assets/BerikoSVGComponent';
import ArrowSVGComponent from './assets/ArrowSVGComponent';
import FontStyles from './assets/Fontstyle';
import DullBerikoSVGComponent from './assets/DullBerikoSVGComponent';
import React, { useState, useEffect } from 'react';
import LandingPage from './components/pages/LandingPage';
import SecondPage from './components/pages/SecondPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Testcomponent from './components/Testcomponent';
import AnotherTestCOmponent from './components/AnotherTestComponent';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
export default function App() {
  
  return(
  //   <NavigationContainer>
  //     <Stack.Navigator screenOptions={{
  //   headerShown: false
  // }}>
  //     <Stack.Screen
  //         name='home'
  //         component={LandingPage}
          
  //       />
  //       <Stack.Screen name='second' component={SecondPage}/>

  //     </Stack.Navigator>
  //   </NavigationContainer>


    <NavigationContainer> 
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
       <Stack.Screen
           name='home'
           component={Testcomponent}
          
         />
         <Stack.Screen name='second' component={AnotherTestCOmponent}/>

      </Stack.Navigator>    
      
    </NavigationContainer>
     
    
)};
