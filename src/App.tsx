import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from "react-redux";
import { store } from './store'
import { AppNavigation } from './navigation/AppNavigation'

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <AppNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}
