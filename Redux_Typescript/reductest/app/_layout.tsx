import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Provider } from 'react-redux';
import store from '@/hooks/Store/Store';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) { 
      setTimeout(()=>{
        SplashScreen.hideAsync();
       }, 2000);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

console.log('store state', store.getState());

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Provider store={store}> 

      <Stack>
        <Stack.Screen name="index" options={{ headerShown:false, headerLeft:()=> <></>}} />
        <Stack.Screen name="login"  options={{headerShown:false, headerLeft:()=> <></>}} /> 
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />

      </Stack>
      </Provider>

      <StatusBar style="auto" />
    </ThemeProvider>
   
  );
}
