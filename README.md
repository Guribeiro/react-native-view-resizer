# react-native-view-resizer

Animated Resizer View componente for react-native

## Info

react-native-view-resizer depends on [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/), make sure you have
followed the reanimated [installation section](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/#installation)

## Installation

```
npm install react-native-view-resizer
```

or

```
yarn add react-native-view-resizer
```



## Basic usage

```js
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { type ResizeButtonProps, Resizer } from 'react-native-view-resizer';

const { width } = Dimensions.get('screen');

export default function App() {
  const renderResizeButtonComponent = ({
    onPress,
    size,
    backgroundColor,
  }: ResizeButtonProps & { backgroundColor: string }) => {
    return (
      <Pressable
        onPress={onPress}
        style={[styles.resize_button, { backgroundColor }]}
      >
        <Text>resize</Text>
        <Text>{size}px</Text>
      </Pressable>
    );
  };

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
```
![basic example](.github/videos/example.gif)


## Reference

Resize component extends ```ComponentProps<Animated.View>```

### sizes

array of numbers require at least 2 sizes

| Type   | Required | Default   |
| ------ | -------- | --------- |
| number[] | Yes       |  |

---
### resizeButtonComponent

button component for handling the resize action

| Type            | Required | Default   |
| --------------- | -------- | --------- |
| React Component | No       | Component |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
