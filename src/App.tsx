import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Splash from './splash/Splash';
import Dashboard from './dashboard/Dashboard';
import GetStarted from './onboard/GetStarted';
import EmailVerification from './onboard/EmailVerification';
import SignIn from './onboard/SignIn';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  GetStarted: { verified?: boolean } | undefined;
  EmailVerification: undefined;
  SignIn: undefined;
};

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'EmailVerification'
>;

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="EmailVerification" component={EmailVerification} options={{
          presentation: 'modal',
          animation: 'slide_from_bottom', 
        }} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
