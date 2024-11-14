import { Link, Navigator, router } from "expo-router";
import { Text, View, StyleSheet, TextInput, Button, Pressable, Dimensions, Platform, ScrollView } from "react-native";
import { Image } from 'expo-image';
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";

const PlaceholderImage = require('@/assets/images/react-logo.png');

export default function SplashScreen() {

  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;


  useEffect(()=>{
//   debugger;
    setTimeout(()=>{router.navigate('/login') }, 2000);

  });


  return (
    <View style={styles.container}>
       <Image style={{height:screenHeight, width:screenWidth}} source={PlaceholderImage}/>          
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'stretch',
      justifyContent:'center',
      alignContent:'stretch'
    },
    loginPage:{
       flex: 1,
       justifyContent:'center',
       backgroundColor:'yello',
       alignItems:'stretch'
       
    },
    loginCotainer:
    {
      flex:1,
      backgroundColor:'lightgray',
      borderRadius:5,
      paddingHorizontal:10,
      justifyContent:'space-evenly'
      
    },
    imageContainer: {
      alignSelf:'center', 
      flex:0.3,
      backgroundColor:'transparent',
      justifyContent:'center'
    },
     formContainer: {
      flex:0.3,
      backgroundColor:"transparent" ,
      justifyContent:'center',
      alignContent:'stretch', 
      alignItems:'stretch',
      paddingHorizontal:10,
      color:'white'
    },
    buttonContainer:
    {
      backgroundColor:'transparent',
      flex:0.2 ,
      alignItems:'stretch',
    }
  });