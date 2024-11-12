import { Link, Navigator, router } from "expo-router";
import { Text, View, StyleSheet, TextInput, Button, Pressable, Dimensions, Platform, ScrollView } from "react-native";
import { Image } from 'expo-image';
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from 'expo-image-picker';
import {app, auth} from '../components/Services/Firebase';
import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function LoginPage() {

  const [email, setEmail] = useState<string>('naveedkhan@gmail.com');
  const [password, setPassword] = useState<string>('0346asdff');
  const [fullName, setFullName] = useState<string>('0346asdff');
  const [phoneNumber, setPhoneNumber] = useState<string>('0346asdff');
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.3,
      base64:true
    });

    debugger;
    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].base64!);
      //setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const RegisterUser = async () =>
    {

      //const auth = getAuth();
     // var database = getDatabase();
debugger;
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          var uid = user.uid;
          const db = getDatabase(app);
          set(ref(db, 'users/' + uid), {
            fullName: fullName,
            email: email,
            profile_picture : selectedImage,
            phoneNumber:phoneNumber
          }).then((res)=>{
              debugger;
             setIsLoading(false);
              router.navigate("/(tabs)/");
          }).catch((err)=>{
              debugger;
              setIsLoading(false);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsLoading(false);
        });
      
    }

    const LoginUser = async () =>
      {
        debugger;
        setIsLoading(true);
debugger;

       const auth2 = auth;//getAuth(app);
      await  signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            var uid = user.uid;
            const db = getDatabase(app);
            set(ref(db, 'users/' + uid), {
              username: email,
              email: email,
              profile_picture : "",
              phoneNumber:"LPC"
            }).then((res)=>{
                debugger;
               setIsLoading(false);
                router.navigate("/(tabs)/");
            }).catch((err)=>{
                debugger;
                setIsLoading(false);
            });
         
            // ...
          })
          .catch((error) => {
            setIsLoading(false);
            const errorCode = error.code;
            const errorMessage = error.message;
          }); 
        
      }

//ebugger;
      const imageSource = selectedImage ? { uri: 'data:image/jpeg;base64,'+ selectedImage } : PlaceholderImage;
  return (
    <View style={styles.container}>

          <ScrollView style={{flex:1, backgroundColor:'#25292e'}}>

          <View style={{height:screenHeight}}>
              <View style={styles.loginCotainer}>
                
              <View style={{flex:0.1, backgroundColor:'transparent'}}/>
                    <View style={styles.imageContainer}>
                      <Image style={{height:screenHeight/4, width:screenHeight/4, borderRadius:screenHeight/8}} source={PlaceholderImage}/>
                    </View>
                

                  {!showRegister ?
                      <View style={styles.formContainer}>
                        <TextInput value={email} onChangeText={setEmail} placeholderTextColor={'white'} style={{height:40, paddingLeft:5, alignContent:'stretch', alignSelf:'stretch', borderColor:'white', borderRadius:3, borderWidth:2, color:'white',  marginVertical:10}} placeholder="Username here"/>
                        <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} placeholderTextColor={'white'} style={{height:40, paddingLeft:5,  color:'white', borderColor:'white', borderRadius:3, borderWidth:2, marginVertical:10}} placeholder="Password here"/>                
                      </View>  
                  :
                      <View style={[styles.formContainer, {flex:0.6}]}>
                        <TextInput value={fullName} onChangeText={setFullName} placeholderTextColor={'white'} style={{height:40, paddingLeft:5, alignContent:'stretch', alignSelf:'stretch', borderColor:'white', borderRadius:3, borderWidth:2, color:'white',  marginVertical:10}} placeholder="Full Name here"/>               
                        <TextInput value={phoneNumber} onChangeText={setPhoneNumber} placeholderTextColor={'white'} style={{height:40, paddingLeft:5, alignContent:'stretch', alignSelf:'stretch', borderColor:'white', borderRadius:3, borderWidth:2, color:'white',  marginVertical:10}} placeholder="Phone Number here"/>               
                        <TextInput value={email} onChangeText={setEmail} placeholderTextColor={'white'} style={{height:40, paddingLeft:5, alignContent:'stretch', alignSelf:'stretch', borderColor:'white', borderRadius:3, borderWidth:2, color:'white',  marginVertical:10}} placeholder="Username here"/>
                        <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} placeholderTextColor={'white'} style={{height:40, paddingLeft:5,  color:'white', borderColor:'white', borderRadius:3, borderWidth:2, marginVertical:10}} placeholder="Password here"/>                
                        <Pressable style={{ alignItems:'center',padding:5}} onPress={pickImageAsync}>
                            <Image  source={imageSource} style={{height:40, width:40}} />
                            <Text style={{color:'white', marginTop:5}}>Upload Profile Picture</Text>
                        </Pressable>
                    </View>
                  }

                  {isLoading? <Text style={{alignSelf:'center'}}>Loading .......</Text> :
                   !showRegister?
                    <View style={styles.buttonContainer}>
                      <Pressable  style={{borderColor:'green', borderWidth:2, margin:5, borderRadius:5 , alignItems:'center', padding:10}}   
                      onPress={LoginUser}>
                            <Text style={{color:'white'}}>LOGIN</Text>
                      </Pressable>

                      <Pressable onPress={()=> setShowRegister(true)} style={{alignItems:'center', marginVertical:10}}>
                        <Text style={{color:'white'}}>Dont have Account ? Register Here</Text>
                      </Pressable>
                    
                    </View>
                      : <View style={styles.buttonContainer}>
                      <Pressable  style={{borderColor:'green', borderWidth:2, margin:5, borderRadius:5 , alignItems:'center', padding:10}}   
                      onPress={RegisterUser}>
                            <Text style={{color:'white'}}>REGISTER</Text>
                      </Pressable>

                      <Pressable onPress={()=> setShowRegister(false)} style={{alignItems:'center', marginVertical:10}}>
                        <Text style={{color:'white'}}>Already have Account ? SignIn</Text>
                      </Pressable>

                      </View> 
                      }
                    <View style={{flex:0.1, backgroundColor:'transparent'}}/>
                
                </View>  
          </View>
          
            </ScrollView>
        
        
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
       backgroundColor:'yellow',
       alignItems:'stretch'
       
    },
    loginCotainer:
    {
      flex:1,
      backgroundColor:'#25292e',
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