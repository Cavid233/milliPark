import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { BaseText, BaseTextVariant } from '@/components';
import { colors } from '@/constants';
import { SvgIcon, SvgXmlIconNames } from '@/assets';

export interface IActivityCardIconLayout {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface IActivityCardProps {
  title: string;
  icon: SvgXmlIconNames;
  iconLayout: IActivityCardIconLayout;
  style?: StyleProp<ViewStyle>;
}

const ActivityCard = ({
  title,
  icon,
  iconLayout,
  style,
}: IActivityCardProps) => {
  const { left, top, width, height } = iconLayout;

  return (
    <View style={[styles.container, style]}>
      <SvgIcon
        name={icon}
        width={width}
        height={height}
        style={[styles.icon, { left, top }]}
      />
      <BaseText
        variant={BaseTextVariant.semiBold20}
        color={colors.main.white}
        style={styles.title}
      >
        {title}
      </BaseText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 120,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: colors.glass.white20,
    boxShadow: `0px 7.143px 17.143px 0px ${colors.shadow.forest}`,
  },
  icon: {
    position: 'absolute',
  },
  title: {
    position: 'absolute',
    left: 14,
    bottom: 13,
    lineHeight: 20,
  },
});

export default ActivityCard;
