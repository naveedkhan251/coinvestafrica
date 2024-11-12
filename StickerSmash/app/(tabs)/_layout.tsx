import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
      backgroundColor: '#25292e',
      },
    }}
    >
      {/* <Tabs.Screen  name="Login"  options={{title: 'Home' , headerLeft:()=> <></>}} />  */}
      <Tabs.Screen  name="index" options={{  tabBarIcon:({focused, color})=> <Ionicons color={color} name={ focused ? "home" : "home-outline"} size={30}/>, title: 'Home' ,  headerLeft:()=> <></>}} />
      <Tabs.Screen name="imageUpload" options={{ tabBarIcon:({focused, color})=> <Ionicons color={color} name={ focused ? "cloud-upload-sharp" : "cloud-upload-outline"} size={30}/>, title: 'Upload' , headerLeft:()=> <></>}} />
      <Tabs.Screen name="about" options={{ tabBarIcon:({focused, color})=> <Ionicons color={color} name={ focused ? "information-sharp" : "information-outline"} size={30}/>, title: 'About' }} />
    </Tabs>
  );
}
