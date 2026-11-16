import {
  AuthRootParamsList,
  OnboardingRootParamsList,
  RootRootParamsList,
} from '@/constants';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Combine all param lists for a single, convenient navigation type.
export type AppNavigationType = RootRootParamsList &
  OnboardingRootParamsList &
  AuthRootParamsList;

const useAppNavigation = () => {
  // Typed navigation helper used across the app
  const navigation = useNavigation<StackNavigationProp<AppNavigationType>>();
  return navigation;
};

export default useAppNavigation;
