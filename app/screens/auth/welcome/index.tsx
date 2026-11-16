import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { OnboardingContainer } from '@/containers';
import {
  ArrowButton,
  BaseText,
  BaseTextVariant,
  RoundIconButton,
} from '@/components';
import { colors } from '@/constants';
import { IconSize, SvgXmlIconNames } from '@/assets';
import SocialLoginButton from './socialLoginButton';

// TODO: wire up MyGov / Apple / Google sign-in and guest access.
const loginOptions = [
  {
    title: 'MyGov ilə daxil ol',
    icon: SvgXmlIconNames.myGov,
    iconSize: IconSize.myGov,
  },
  {
    title: 'Apple ilə daxil ol',
    icon: SvgXmlIconNames.apple,
    iconSize: IconSize.lg,
  },
  {
    title: 'Google ilə daxil ol',
    icon: SvgXmlIconNames.google,
    iconSize: IconSize.lg,
  },
];

const handleLoginPress = () => {};

const WelcomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <OnboardingContainer>
      {/* Leaves room for the language button above the sheet; on short
          screens the sheet's spacers shrink to fit. */}
      <View style={[styles.content, { paddingTop: insets.top + 62 }]}>
        <View style={[styles.sheet, { paddingBottom: insets.bottom + 26 }]}>
          <View style={styles.headingSpacer} />
          <View style={styles.heading}>
            <BaseText
              variant={BaseTextVariant.semiBold36}
              color={colors.main.white}
              style={styles.title}
            >
              Xoş gəlmişsiniz!
            </BaseText>
            <BaseText
              variant={BaseTextVariant.medium20}
              color={colors.main.white80}
              style={styles.subtitle}
            >
              Daxil olun və səfərinizi planlayın
            </BaseText>
          </View>
          <View style={styles.optionsSpacer} />
          <View style={styles.options}>
            {loginOptions.map(option => (
              <SocialLoginButton
                key={option.title}
                {...option}
                onPress={handleLoginPress}
              />
            ))}
          </View>
          <View style={styles.dividerSpacer} />
          <BaseText
            variant={BaseTextVariant.light14}
            color={colors.main.white}
            style={styles.divider}
          >
            və ya
          </BaseText>
          <View style={styles.dividerSpacer} />
          <ArrowButton
            title="Qeydiyyatsız giriş"
            onPress={handleLoginPress}
            style={styles.guestButton}
          />
        </View>
      </View>
      <RoundIconButton
        icon={SvgXmlIconNames.global}
        style={[styles.languageButton, { top: insets.top + 8 }]}
      />
    </OnboardingContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'flex-end',
  },
  sheet: {
    flexShrink: 1,
    paddingHorizontal: 15,
    borderTopLeftRadius: 64,
    borderTopRightRadius: 64,
    overflow: 'hidden',
    backgroundColor: colors.glass.olive20,
  },
  headingSpacer: {
    height: 96,
    minHeight: 32,
    flexShrink: 1,
  },
  heading: {
    alignItems: 'center',
    gap: 14,
  },
  title: {
    lineHeight: 41.04,
    textAlign: 'center',
  },
  subtitle: {
    width: 209,
    lineHeight: 22.8,
    textAlign: 'center',
  },
  optionsSpacer: {
    height: 69.36,
    minHeight: 24,
    flexShrink: 1,
  },
  options: {
    gap: 13,
  },
  dividerSpacer: {
    height: 43,
    minHeight: 16,
    flexShrink: 1,
  },
  divider: {
    lineHeight: 18,
    textAlign: 'center',
  },
  guestButton: {
    alignSelf: 'center',
  },
  languageButton: {
    position: 'absolute',
    right: 17,
  },
});

export default WelcomeScreen;
