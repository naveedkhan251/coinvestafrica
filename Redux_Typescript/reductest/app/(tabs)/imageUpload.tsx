import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import { type ImageSource } from 'expo-image';

import * as ImagePicker from 'expo-image-picker';
import { Image } from 'expo-image';
import ImageViewer from "@/components/ImageViewer";
import ImageButton from "@/components/ImageButtons";
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';
import EmojiPicker from '@/components/EmojiPicker';
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";

import { GestureHandlerRootView } from "react-native-gesture-handler";


const PlaceholderImage = require('@/assets/images/react-logo.png');

export default function ImageUpload() {

    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
        });
    
        if (!result.canceled) {
          console.log(result);
          setSelectedImage(result.assets[0].uri);
          setShowAppOptions(true);
        } else {
          alert('You did not select any image.');
        }
      };

      const onReset = () => {
        setShowAppOptions(false);
      };
    
      const onAddSticker = () => {
        setIsModalVisible(true);
      };

      const onModalClose = () => {
        setIsModalVisible(false);
      };
    
      const onSaveImageAsync = async () => {
        // we will implement this later
      };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer  imgSource={PlaceholderImage} selectedImage={selectedImage}/>
      </View>

      <View style={styles.footerContainer}>
        <ImageButton theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <ImageButton label="Use this photo"  onPress={() => setShowAppOptions(true)} />
      </View>
    </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
    },
    imageContainer: {
      flex: 1,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
      },
      optionsContainer: {
        position: 'absolute',
        bottom: 80,
      },
      optionsRow: {
        alignItems: 'center',
        flexDirection: 'row',
      },
  });