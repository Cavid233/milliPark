import { screenOptions } from '@/constants';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import OnboardingStackNavigator, {
  ONBOARDING_ROUTE_NAMES,
  OnboardingRootParamsList,
} from './stacks/onboarding';

export enum ROOT_ROUTE_NAMES {
  OnboardingNavigator = 'OnboardingNavigator',
}

export type RootRootParamsList = {
  OnboardingNavigator: NavigatorScreenParams<OnboardingRootParamsList>;
};

const Stack = createStackNavigator<RootRootParamsList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={ROOT_ROUTE_NAMES.OnboardingNavigator}
        component={OnboardingStackNavigator}
      />
    </Stack.Navigator>
  );
};

export { ONBOARDING_ROUTE_NAMES };
export default AppNavigation;
