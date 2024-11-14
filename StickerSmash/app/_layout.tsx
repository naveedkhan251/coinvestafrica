import { Stack } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { StatusBar } from "expo-status-bar";
import { LogBox ,View,ActivityIndicator} from "react-native";
import React, { useEffect }           from 'react';
import {Provider}      from 'react-redux';

import { useColorScheme } from '@/hooks/useColorScheme';
import store from "@/hooks/Reducers/Store";
LogBox.ignoreAllLogs(true);


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      
      setTimeout(()=>{SplashScreen.hideAsync(); }, 3000);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  debugger;
  const renderLoading = () => {
      return (
          <View>                
              <ActivityIndicator size={"large"} />
          </View>        
      );    
  };

console.log('store state is ', store.getState());

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Provider store={store}>
            <Stack initialRouteName="index"  screenOptions={{headerShadowVisible:false, headerShown:false}}>
              <Stack.Screen name="index" options={{ title: 'Home' , headerShown:false, headerLeft:()=> <></>}} />
              <Stack.Screen  name="Login"  options={{headerShown:false, headerLeft:()=> <></>}} /> 
              {/* <Stack.Screen name="(tabs)" options={{ headerShown:false }} /> */}
              <Stack.Screen name="+not-found" options={{}} />
            </Stack>
        </Provider>
        <StatusBar style="light" />
    </ThemeProvider>
  
  );
}
