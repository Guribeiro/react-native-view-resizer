import type { ComponentProps, ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Pressable, Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type AtLeastTwoItems<T> = [T, T, ...T[]];

export type ResizeButtonProps = {
  onPress: () => void
  size: number
}

export interface ResizerProps extends ComponentProps<Animated.View> {
  children: ReactNode
  resizeButtonComponent?: React.FC<ResizeButtonProps>
  sizes: AtLeastTwoItems<number>
}

export const Resizer = ({
  children,
  sizes,
  resizeButtonComponent,
  ...props
}: ResizerProps) => {
  const [index, setIndex] = useState(0);

  const size = sizes[index] || sizes[0]

  const mapViewHeight = useSharedValue(size)

  const onResize = useCallback(() => {
    if (index >= sizes.length - 1) {
      setIndex(0)
      return
    }
    setIndex((prev) => prev + 1)
  }, [index, sizes])

  useEffect(() => {
    mapViewHeight.value = size;
  }, [size, mapViewHeight]);

  const mapViewStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(mapViewHeight.value),
    }
  })
  return (
    <Animated.View style={mapViewStyles} {...props}>
      {children}
      {resizeButtonComponent
        ? resizeButtonComponent({
          onPress: onResize,
          size,
        })
        : (
          <Pressable
            onPress={onResize}
            style={{ position: 'absolute', top: 12, right: 12 }}
          >
            <Text>resize</Text>
            <Text>{size}px</Text>
          </Pressable>
        )}
    </Animated.View>
  )
}
