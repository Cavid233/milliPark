import { StackNavigationOptions } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import { config } from '../config';

export const screenOptions: StackNavigationOptions = {
  headerShown: false,
  gestureResponseDistance: config.screenWidth / 1.3,
  animation: 'slide_from_right',
};

// Route names and params live here rather than next to the navigators, so
// screens can navigate without importing the navigators that import them.
export enum ROOT_ROUTE_NAMES {
  OnboardingNavigator = 'OnboardingNavigator',
  AuthNavigator = 'AuthNavigator',
}

export enum ONBOARDING_ROUTE_NAMES {
  Onboarding = 'Onboarding',
}

export enum AUTH_ROUTE_NAMES {
  Welcome = 'Welcome',
}

export type OnboardingRootParamsList = {
  Onboarding: undefined;
};

export type AuthRootParamsList = {
  Welcome: undefined;
};

export type RootRootParamsList = {
  OnboardingNavigator: NavigatorScreenParams<OnboardingRootParamsList>;
  AuthNavigator: NavigatorScreenParams<AuthRootParamsList>;
};
