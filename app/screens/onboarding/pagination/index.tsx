import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '@/constants';
import { IconSize, SvgIcon, SvgXmlIconNames } from '@/assets';

interface IPaginationProps {
  count: number;
  activeIndex: number;
  style?: StyleProp<ViewStyle>;
}

const Pagination = ({ count, activeIndex, style }: IPaginationProps) => {
  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: count }, (_, index) => (
        <SvgIcon
          key={index}
          name={
            index === activeIndex
              ? SvgXmlIconNames.pageActive
              : SvgXmlIconNames.pageInactive
          }
          size={IconSize.dot}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 89,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingHorizontal: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.glass.white20,
    backgroundColor: colors.glass.mint20,
    overflow: 'hidden',
  },
});

export default Pagination;
