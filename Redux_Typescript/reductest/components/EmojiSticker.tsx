import { View } from 'react-native';
import { Image, type ImageSource } from 'expo-image';
import Animated from 'react-native-reanimated'

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Animated.Image resizeMode={'contain'} source={stickerSource} style={{ width: imageSize, height: imageSize }} />
    </View>
  );
}
