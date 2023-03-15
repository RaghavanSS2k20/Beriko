import { StatusBar } from 'expo-status-bar';
import {View, Text, Image, ScrollView, TextInput,StyleSheet} from 'react-native';
import BerikoSVGComponent from './assets/BerikoSVGComponent';

import * as Font from 'expo-font';
import { useFonts as uf }   from '@expo-google-fonts/noto-sans';
const [fontsLoaded] = uf({
  'noto-sans-bold': require('@expo-google-fonts/noto-sans'),
});
import {
  useFonts,
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
  Nunito_800Bold,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito';


export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_800Bold,
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
  let fontSize = 45;
  let paddingVertical = 6;
  return(

      
      <View style={{flex:1,justifyContent:'center',backgroundColor:'#243236',padding:20}}>
          <View style={{ transform: [{ rotate: '30deg' }] , paddingBottom:100 }}>
              <BerikoSVGComponent width={300} height={300}/>
          </View>
          <View style={{margin:20}}>
            <Text style={styles.text}>Beriko</Text>
            <View style={{marginTop:20}}>
              <Text style={styles.subTexts}>
                Hey there

              </Text>

            </View>
          </View>
        
      </View>
     
    
)};
const styles=StyleSheet.create({
 text:{
  color:'#08cc7e',
  fontSize:55,
  fontFamily: 'Nunito_700Bold',
  
 },
 subTexts:{
  color:'#FEFEFF'

 }

});

