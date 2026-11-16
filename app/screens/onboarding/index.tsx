import React, { useCallback, useRef, useState } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  ScrollViewInstance,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { OnboardingContainer } from '@/containers';
import { ArrowButton, DesignCanvas, RoundIconButton } from '@/components';
import { SvgXmlIconNames } from '@/assets';
import { AUTH_ROUTE_NAMES, ROOT_ROUTE_NAMES } from '@/constants';
import { useAppNavigation } from '@/hooks';
import Pagination from './pagination';
import DiscoverSlide from './slides/discoverSlide';
import ExperiencesSlide from './slides/experiencesSlide';

const slides = [DiscoverSlide, ExperiencesSlide];

const OnboardingScreen = () => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const navigation = useAppNavigation();
  const scrollRef = useRef<ScrollViewInstance>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === slides.length - 1;

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const index = Math.round(event.nativeEvent.contentOffset.x / width);
      setActiveIndex(index);
    },
    [width],
  );

  const handleNext = useCallback(() => {
    if (isLastSlide) {
      // Replace instead of navigate so going back doesn't reopen onboarding.
      navigation.replace(ROOT_ROUTE_NAMES.AuthNavigator, {
        screen: AUTH_ROUTE_NAMES.Welcome,
      });
      return;
    }
    scrollRef.current?.scrollTo({ x: width * (activeIndex + 1) });
  }, [activeIndex, isLastSlide, navigation, width]);

  return (
    <OnboardingContainer>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map((Slide, index) => (
          <View key={index} style={[styles.slide, { width }]}>
            <Slide />
          </View>
        ))}
      </ScrollView>
      <View style={styles.controls}>
        {/* The Figma frame has no status bar, so this sits below the safe area
            instead of at the design's top offset. */}
        <RoundIconButton
          icon={SvgXmlIconNames.global}
          style={[styles.languageButton, { top: insets.top + 8 }]}
        />
        <DesignCanvas>
          <View style={styles.footer}>
            <Pagination count={slides.length} activeIndex={activeIndex} />
            <ArrowButton
              title={isLastSlide ? 'Başla' : 'Növbəti'}
              onPress={handleNext}
            />
          </View>
        </DesignCanvas>
      </View>
    </OnboardingContainer>
  );
};

const styles = StyleSheet.create({
  slide: {
    overflow: 'hidden',
  },
  controls: {
    ...StyleSheet.absoluteFill,
    pointerEvents: 'box-none',
  },
  languageButton: {
    position: 'absolute',
    right: 35,
  },
  footer: {
    position: 'absolute',
    top: 675,
    left: 0,
    right: 0,
    alignItems: 'center',
    gap: 55,
    pointerEvents: 'box-none',
  },
});

export default OnboardingScreen;
