import type { FC } from 'react';
import type { ResizeButtonProps as ButtonProps, ResizerProps as Props } from './types'

declare module 'react-native-view-resizer' {
  export interface ResizerProps extends Props { }
  export interface ResizeButtonProps extends ButtonProps { }
  const Resizer: FC<ResizerProps>;
  export default Resizer;
}
