import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AppNavigation from './app';

const Router = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
