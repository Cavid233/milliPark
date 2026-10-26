import React, { useMemo } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { config } from '@/constants';

const {
  design: {
    width: designWidth,
    height: designHeight,
    safeTop: designSafeTop,
    safeBottom: designSafeBottom,
  },
} = config;

const designSafeHeight = designHeight - designSafeTop - designSafeBottom;
const designSafeCenterY = designSafeTop + designSafeHeight / 2;

interface IDesignCanvasProps {
  children: React.ReactNode;
}

// Lays children out on the Figma frame size and scales it so the design's safe
// area fits inside the device's safe area, keeping absolute positions taken
// from the design proportional and clear of the status bar and home indicator.
const DesignCanvas = ({ children }: IDesignCanvasProps) => {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const canvasStyle = useMemo(() => {
    const safeHeight = height - insets.top - insets.bottom;
    const scale = Math.min(width / designWidth, safeHeight / designSafeHeight);
    const safeCenterY = insets.top + safeHeight / 2;

    return {
      left: (width - designWidth) / 2,
      // The transform scales around the canvas center, so shift the canvas
      // until the design's safe-area center lands on the device's.
      top:
        safeCenterY -
        designHeight / 2 -
        (designSafeCenterY - designHeight / 2) * scale,
      transform: [{ scale }],
    };
  }, [width, height, insets.top, insets.bottom]);

  return <View style={[styles.canvas, canvasStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  canvas: {
    position: 'absolute',
    width: designWidth,
    height: designHeight,
    pointerEvents: 'box-none',
  },
});

export default DesignCanvas;
