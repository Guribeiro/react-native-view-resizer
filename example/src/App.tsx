import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Resizer, { type ResizeButtonProps } from 'react-native-view-resizer';

const { width } = Dimensions.get('screen');

const renderResizeButtonComponent = ({
  onPress,
  size,
  index,
  backgroundColor,
}: ResizeButtonProps & { backgroundColor: string }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.resize_button, { backgroundColor }]}
    >
      <Text>size: {size}px</Text>
      <Text>index: {index}</Text>
    </Pressable>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Resizer
          sizes={[300, 600, 750, 900]}
          resizeButtonComponent={(props) =>
            renderResizeButtonComponent({ ...props, backgroundColor: 'yellow' })
          }
        >
          <Image
            source={{
              uri: 'https://www.shutterstock.com/image-photo/vertical-scenic-view-matterhorn-mountain-600nw-1807498621.jpg',
            }}
            style={styles.image}
          />
        </Resizer>
        <Resizer
          sizes={[300, 400]}
          resizeButtonComponent={(props) =>
            renderResizeButtonComponent({ ...props, backgroundColor: 'green' })
          }
        >
          <Image
            source={{
              uri: 'https://img.freepik.com/free-photo/beautiful-waterfall-landscape_23-2150526227.jpg?t=st=1736892795~exp=1736896395~hmac=ddca45d41a6b5ac6611a6895c4eaf25ebd8a2050e0132ae48c78ad82e4898a96&w=740',
            }}
            style={styles.image}
          />
        </Resizer>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width,
    height: '100%'
  },
  resize_button: {
    position: 'absolute',
    top: 6,
    right: 6,
    padding: 12,
    backgroundColor: '#ccc',
    borderRadius: 50
  }
});
