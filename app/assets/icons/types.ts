import { StyleProp, ViewStyle } from 'react-native';

export enum SvgXmlIconNames {
  arrowRight = 'arrowRight',
  global = 'global',
  pageActive = 'pageActive',
  pageInactive = 'pageInactive',
  boat = 'boat',
  camping = 'camping',
  hiking = 'hiking',
  bicycle = 'bicycle',
}

export interface IconSize {
  width: number;
  height: number;
}

export interface SvgXmlProps {
  name: SvgXmlIconNames;
  size?: IconSize;
  width?: number;
  height?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}
