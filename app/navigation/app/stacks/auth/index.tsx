import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AUTH_ROUTE_NAMES,
  AuthRootParamsList,
  screenOptions,
} from '@/constants';
import { WelcomeScreen } from '@/screens';

const Stack = createStackNavigator<AuthRootParamsList>();

const AuthStackNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={AUTH_ROUTE_NAMES.Welcome} component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
