import { Text, View, StyleSheet } from 'react-native';
import { getAuth } from "firebase/auth";
import { auth } from '@/Services/Firebase';
import { useEffect } from 'react';

export default function AboutScreen() {

  useEffect(()=>{
    //   debugger;
       // setTimeout(()=>{router.navigate("/Login") }, 2000);
       const user = auth.currentUser;
      });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
