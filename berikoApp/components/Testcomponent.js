import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Alert,View, Text, Image, ScrollView, TextInput,StyleSheet,TouchableHighlight,TouchableOpacity,} from 'react-native';
import BerikoSVGComponent from '../assets/BerikoSVGComponent';
import ArrowSVGComponent from '../assets/ArrowSVGComponent';


const viewsData = [
  { id: 1, text: 'View 1' },
  { id: 2, text: 'View 2' },
  { id: 3, text: 'View 3' },
];

const Testcomponent = ({navigation}) => {
    const [viewIndex, setViewIndex] = useState(0);

  const handleButtonClick = () => {
    setViewIndex((viewIndex + 1) % 3);
  };
  const handleNextButtonClick = ()=>{
    navigation.navigate('second')
  }

  return (
    <View>
      {viewIndex === 0 ? (
         <View style={{height:900, backgroundColor:'red'}}>
         <Text>View 1</Text>
         <View style={{paddingTop:100}}>
           <Button title="Go to View 2" onPress={handleButtonClick} />
         </View>
       </View>
        
   
      ) : viewIndex === 1 ? (
        <View style={{height:900, backgroundColor:'green'}}>
          <Text>View 2</Text>
          <View style={{paddingTop:100}}>
            <Button title="Go to View 3" onPress={handleButtonClick} />
          </View>
        </View>
      ) : (
        <View style={{height:900, backgroundColor:'pink'}}>
          <Text>View 3</Text>
          <View style={{paddingTop:100}}>
          <Button title="Go to View 1" onPress={handleNextButtonClick} />
          </View>
        </View>
      )}
    </View>
  );

  };
  const styles=StyleSheet.create({
    text:{
     color:'#08cc7e',
     fontSize:65,
     fontFamily: 'Nunito_800ExtraBold',
     
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
     
   
    },
    button: {
     marginBottom: 30,
    justifyContent: 'center',
     alignItems: 'center',
     width: 50,
     height: 50,
     alignItems: 'center',
     borderRadius: 100,
     backgroundColor: '#08cc7e',
   },
   buttonText: {
     textAlign: 'center',
     padding: 20,
     color: 'white',
   },
   
   });
   

export default Testcomponent;
