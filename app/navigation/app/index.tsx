import {
  ROOT_ROUTE_NAMES,
  RootRootParamsList,
  screenOptions,
} from '@/constants';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingStackNavigator from './stacks/onboarding';
import AuthStackNavigator from './stacks/auth';

const Stack = createStackNavigator<RootRootParamsList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={ROOT_ROUTE_NAMES.OnboardingNavigator}
        component={OnboardingStackNavigator}
      />
      <Stack.Screen
        name={ROOT_ROUTE_NAMES.AuthNavigator}
        component={AuthStackNavigator}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
