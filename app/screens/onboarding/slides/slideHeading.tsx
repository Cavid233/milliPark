import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BaseText, BaseTextVariant } from '@/components';
import { colors } from '@/constants';

interface ISlideHeadingProps {
  title: string;
  description: string;
  top: number;
}

const SlideHeading = ({ title, description, top }: ISlideHeadingProps) => {
  return (
    <View style={[styles.container, { top }]}>
      <BaseText
        variant={BaseTextVariant.semiBold36}
        color={colors.main.white}
        style={styles.title}
      >
        {title}
      </BaseText>
      <BaseText
        variant={BaseTextVariant.regular16}
        color={colors.main.ivory}
        style={styles.description}
      >
        {description}
      </BaseText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 35,
    width: 332,
    alignItems: 'center',
    gap: 16,
  },
  title: {
    alignSelf: 'stretch',
    lineHeight: 41.04,
    textAlign: 'center',
  },
  description: {
    width: 281,
    lineHeight: 18.24,
    textAlign: 'center',
  },
});

export default SlideHeading;
