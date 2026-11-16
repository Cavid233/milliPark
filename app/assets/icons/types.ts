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
  chevronRight = 'chevronRight',
  myGov = 'myGov',
  apple = 'apple',
  google = 'google',
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
