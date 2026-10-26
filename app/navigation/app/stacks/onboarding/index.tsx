import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOptions } from '@/constants';
import { OnboardingScreen } from '@/screens';

export enum ONBOARDING_ROUTE_NAMES {
  Onboarding = 'Onboarding',
}

export type OnboardingRootParamsList = {
  Onboarding: undefined;
};

const Stack = createStackNavigator<OnboardingRootParamsList>();

const OnboardingStackNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={ONBOARDING_ROUTE_NAMES.Onboarding}
        component={OnboardingScreen}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStackNavigator;
