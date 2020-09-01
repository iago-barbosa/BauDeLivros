import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RouteMain from './src/Routes/RouteMain/routes';

export default function App() {
  return (
    <NavigationContainer>
        <RouteMain />
    </NavigationContainer>
  );
}

