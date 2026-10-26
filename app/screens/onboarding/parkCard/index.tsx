import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Image, ImageProps } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { BaseText, BaseTextVariant } from '@/components';
import { colors } from '@/constants';

interface IParkCardProps {
  image: ImageProps['source'];
  title: string;
  location: string;
  isDimmed?: boolean;
  style?: StyleProp<ViewStyle>;
}

const ParkCard = ({
  image,
  title,
  location,
  isDimmed = false,
  style,
}: IParkCardProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.inner}>
        <Image source={image} style={styles.image} contentFit="cover" />
        {isDimmed && <View style={styles.dim} />}
        <LinearGradient
          colors={[
            colors.shadow.transparentWash,
            colors.shadow.transparentWash,
            colors.shadow.forestWash,
          ]}
          locations={[0, 0.35, 1]}
          style={styles.wash}
        />
        <View style={styles.details}>
          <BaseText
            variant={BaseTextVariant.semiBold18}
            color={colors.main.white}
          >
            {title}
          </BaseText>
          <BaseText
            variant={BaseTextVariant.regular12}
            color={colors.main.white}
          >
            {location}
          </BaseText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 195,
    borderRadius: 24,
    borderWidth: 1.8,
    borderColor: colors.glass.white30,
    backgroundColor: colors.glass.white30,
    boxShadow: `0px 7.5px 18px 0px ${colors.shadow.forest}`,
  },
  inner: {
    position: 'absolute',
    top: 2.7,
    left: 2.7,
    width: 171,
    height: 186,
    borderRadius: 20,
    overflow: 'hidden',
    boxShadow: `0px 7.5px 9px 0px ${colors.shadow.forest}`,
  },
  image: {
    ...StyleSheet.absoluteFill,
  },
  dim: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.glass.black20,
  },
  wash: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
  },
  details: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    gap: 2,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default ParkCard;
