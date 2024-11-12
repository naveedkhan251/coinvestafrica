import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);


export default function RootLayout() {

  return (
    <>
    <StatusBar style="light" />
      <Stack  screenOptions={{headerShadowVisible:false, headerShown:false}}>
        <Stack.Screen name="index" options={{ title: 'Home' , headerShown:false, headerLeft:()=> <></>}} />
        <Stack.Screen  name="Login"  options={{headerShown:false, headerLeft:()=> <></>}} /> 
        <Stack.Screen name="(tabs)" options={{ headerShown:false }} />
        <Stack.Screen name="+not-found" options={{}} />
      </Stack>
    </>
  );
}
