import { Image, StyleSheet, Platform , View, Text} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAppSelector } from '@/hooks/Store/hooks';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';
import { useSelector } from 'react-redux';

export default function HomeScreen() {
  debugger;
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      //SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
debugger;
  const check = useAppSelector((state)=> state.posts);
  console.log("new state is", check);
  debugger;
  return (
    <View
      style={styles.container}
    >
      <Text style={{color:'white'}}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
