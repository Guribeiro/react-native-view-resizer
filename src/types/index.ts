import type { ComponentProps, ReactNode } from "react";
import type Animated from "react-native-reanimated";

type AtLeastTwoItems<T> = [T, T, ...T[]];

export type ResizeButtonProps = {
  onPress: () => void
  size: number
  index: number
}

export interface ResizerProps extends ComponentProps<Animated.View> {
  children: ReactNode
  resizeButtonComponent?: React.FC<ResizeButtonProps>
  sizes: AtLeastTwoItems<number>
}
