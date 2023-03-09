import { StatusBar } from 'expo-status-bar';
import {View, Text, Image, ScrollView, TextInput,StyleSheet} from 'react-native';


export default function App() {
  return(

      
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#243236'}}>
        <Text style={styles.text}>Beriko</Text>
        
      </View>
     
    
)};
const styles=StyleSheet.create({
 text:{
  color:'white',
  fontSize:37,
  fontFamily: 'Nunito',
 },

});

