import { StyleSheet } from 'react-native'
import { Image, type ImageSource } from "expo-image";

type props = 
{
  imgSource: ImageSource;
  selectedImage?: string;
}

export default function ImageViewer({imgSource, selectedImage}: props)
{
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image contentFit='contain' source={imageSource} style={styles.image} />
}

const styles = StyleSheet.create({
     image: {
      width: 320,
      height: 440,
      borderRadius: 18,
    },
  });