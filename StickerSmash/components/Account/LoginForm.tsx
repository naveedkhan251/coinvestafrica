import { Link, Navigator, router } from "expo-router";
import { Text, View, StyleSheet, TextInput, Button, Pressable, Dimensions, Platform, ScrollView } from "react-native";
import { Image } from 'expo-image';
import { SafeAreaView } from "react-native-safe-area-context";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const PlaceholderImage = require('@/assets/images/background-image.png');

type props =
{
  SetEmail:()=> void;
  SetPassword:()=> void;
  OnPress:()=> void;
  SwapPages:()=> void;
}

export default function LoginForm({SetEmail, SetPassword, SwapPages, OnPress}: props) {

  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;


  return ( <View style={styles.loginCotainer}>
                
              <View style={{flex:0.1, backgroundColor:'green'}}/>
                    <View style={styles.imageContainer}>
                      <Image style={{height:screenHeight/4, width:screenHeight/4, borderRadius:screenHeight/8}} source={PlaceholderImage}/>
                    </View>
                
                    <View style={styles.formContainer}>
                      <TextInput onChangeText={SetEmail} placeholderTextColor={'white'} style={{height:40, paddingLeft:5, alignContent:'stretch', alignSelf:'stretch', borderColor:'white', borderRadius:3, borderWidth:2, color:'white',  marginVertical:10}} placeholder="Username here"/>
                      <TextInput onChangeText={SetPassword} secureTextEntry={true} placeholderTextColor={'white'} style={{height:40, paddingLeft:5,  color:'white', borderColor:'white', borderRadius:3, borderWidth:2, marginVertical:10}} placeholder="Password here"/>                
                    </View>  
                
                    <View style={styles.buttonContainer}>
                      <Pressable  style={{borderColor:'green', borderWidth:2, margin:5, borderRadius:5 , alignItems:'center', padding:8}}   
                      onPress={OnPress}>
                            <Text style={{color:'white'}}>LOGIN</Text>
                      </Pressable>

                      <Pressable onPress={SwapPages} style={{alignItems:'center'}}>
                        <Text>Dont have Account ? Register Here</Text>
                      </Pressable>
                    
                    </View>
                    <View style={{flex:0.1, backgroundColor:'green'}}/>
                
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