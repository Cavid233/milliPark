import React from 'react';
import { SvgXml } from 'react-native-svg';
import ArrowRightIcon from './arrow-right';
import GlobalIcon from './global';
import PageActiveIcon from './page-active';
import PageInactiveIcon from './page-inactive';
import BoatIcon from './boat';
import CampingIcon from './camping';
import HikingIcon from './hiking';
import BicycleIcon from './bicycle';
import { SvgXmlIconNames, SvgXmlProps } from './types';

export const IconSize = {
  dot: {
    width: 6.75,
    height: 6.75,
  },
  md22: {
    width: 22,
    height: 22,
  },
  lg: {
    width: 24,
    height: 24,
  },
};

const icons: Record<SvgXmlIconNames, string> = {
  [SvgXmlIconNames.arrowRight]: ArrowRightIcon,
  [SvgXmlIconNames.global]: GlobalIcon,
  [SvgXmlIconNames.pageActive]: PageActiveIcon,
  [SvgXmlIconNames.pageInactive]: PageInactiveIcon,
  [SvgXmlIconNames.boat]: BoatIcon,
  [SvgXmlIconNames.camping]: CampingIcon,
  [SvgXmlIconNames.hiking]: HikingIcon,
  [SvgXmlIconNames.bicycle]: BicycleIcon,
};

// Icons keep the colors exported from Figma; `color` only affects currentColor.
const SvgIcon = ({ name, size, width, height, color, style }: SvgXmlProps) => {
  const props = {
    ...(style && { style }),
    ...size,
    ...(height && { height }),
    ...(width && { width }),
    ...(color && { color }),
  };

  return <SvgXml xml={icons[name]} {...props} />;
};

export { SvgXmlIconNames, SvgIcon };
export type { SvgXmlProps };
