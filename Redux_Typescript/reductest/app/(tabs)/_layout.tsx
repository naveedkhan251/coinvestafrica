import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
       <Tabs.Screen  name="index" options={{  tabBarIcon:({focused, color})=> <Ionicons color={color} name={ focused ? "home" : "home-outline"} size={30}/>, title: 'Home' ,  headerLeft:()=> <></>}} />
      <Tabs.Screen name="imageUpload" options={{ tabBarIcon:({focused, color})=> <Ionicons color={color} name={ focused ? "cloud-upload-sharp" : "cloud-upload-outline"} size={30}/>, title: 'Upload' , headerLeft:()=> <></>}} />
      <Tabs.Screen name="about" options={{ tabBarIcon:({focused, color})=> <Ionicons color={color} name={ focused ? "information-sharp" : "information-outline"} size={30}/>, title: 'About' }} />
    
    </Tabs>
  );
}
