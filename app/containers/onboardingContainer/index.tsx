import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { images } from '@/assets';
import { colors } from '@/constants';

interface IOnboardingContainerProps {
  children: React.ReactNode;
}

const OnboardingContainer = ({ children }: IOnboardingContainerProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={images.forestBackground}
        style={styles.background}
        contentFit="cover"
        blurRadius={12}
      />
      <View style={styles.overlay} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main.black,
  },
  background: {
    ...StyleSheet.absoluteFill,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.glass.white10,
  },
});

export default OnboardingContainer;
