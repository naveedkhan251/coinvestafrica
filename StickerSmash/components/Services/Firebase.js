import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyDO3trOLwm9DE7Vvk14tpUS7zH73661VU8",
    authDomain: "coinvestafrica-f7d24.firebaseapp.com",
    projectId: "coinvestafrica-f7d24",
    storageBucket: "coinvestafrica-f7d24.firebasestorage.app",
    messagingSenderId: "260252860137",
    appId: "1:260252860137:web:a12612a050003848b3ba78",
    databaseURL: "https://coinvestafrica-f7d24-default-rtdb.asia-southeast1.firebasedatabase.app/"
};                                                                                                                    
const app = initializeApp(firebaseConfig);

initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  
  const auth = getAuth(app);

  export  {app, auth};