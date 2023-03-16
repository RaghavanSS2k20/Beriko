
import { StatusBar } from 'expo-status-bar';
import {View, Text, Image, ScrollView, TextInput,StyleSheet} from 'react-native';
import BerikoSVGComponent from './assets/BerikoSVGComponent';
import FontStyles from './assets/Fontstyle';

import React, { useState, useEffect } from 'react';

import {
  useFonts,
  NotoSans_100Thin,
  NotoSans_100Thin_Italic,
  NotoSans_200ExtraLight,
  NotoSans_200ExtraLight_Italic,
  NotoSans_300Light,
  NotoSans_300Light_Italic,
  NotoSans_400Regular,
  NotoSans_400Regular_Italic,
  NotoSans_500Medium,
  NotoSans_500Medium_Italic,
  NotoSans_600SemiBold,
  NotoSans_600SemiBold_Italic,
  NotoSans_700Bold,
  NotoSans_700Bold_Italic,
  NotoSans_800ExtraBold,
  NotoSans_800ExtraBold_Italic,
  NotoSans_900Black,
  NotoSans_900Black_Italic,
} from '@expo-google-fonts/noto-sans';
import {
  
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light_Italic,
  Nunito_400Regular_Italic,
  Nunito_500Medium_Italic,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito';
export default function App() {
  let [fontsLoaded] = useFonts({
    NotoSans_100Thin,
    NotoSans_100Thin_Italic,
    NotoSans_200ExtraLight,
    NotoSans_200ExtraLight_Italic,
    NotoSans_300Light,
    NotoSans_300Light_Italic,
    NotoSans_400Regular,
    NotoSans_400Regular_Italic,
    NotoSans_500Medium,
    NotoSans_500Medium_Italic,
    NotoSans_600SemiBold,
    NotoSans_600SemiBold_Italic,
    NotoSans_700Bold,
    NotoSans_700Bold_Italic,
    NotoSans_800ExtraBold,
    NotoSans_800ExtraBold_Italic,
    NotoSans_900Black,
    NotoSans_900Black_Italic,
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light_Italic,
    Nunito_400Regular_Italic,
    Nunito_500Medium_Italic,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;
  
  if (!fontsLoaded) {
    return <BerikoSVGComponent/>;
  }
  return(

      
      <View style={{flex:1,justifyContent:'center',backgroundColor:'#243236',padding:20}}>
          <View style={{ transform: [{ rotate: '30deg' }] , paddingBottom:80 }}>
              <BerikoSVGComponent width={300} height={300}/>
          </View>
          <View style={{margin:20}}>
            <Text style={styles.text}>Beriko</Text>
            <View style={{marginTop:20}}>
              <Text style={styles.subTexts}>
                Hey There,
              </Text>
              <Text style={styles.subTexts2}>
                Welcome to the everlasting bond..!
              </Text>

            </View>
          </View>
        
      </View>
     
    
)};
const styles=StyleSheet.create({
 text:{
  color:'#08cc7e',
  fontSize:65,
  fontFamily: 'Nunito_700Bold',
  
 },
 subTexts:{
  color:'#FEFEFF',
  fontSize:45,
  
  fontFamily:'NotoSans_800ExtraBold'
  

 },
 subTexts2:{
  color:'#FEFEFF',
  fontSize:25,
  
  fontFamily:'Nunito_600SemiBold'
  

 }

});

