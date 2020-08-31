import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RouteIndex from './src/Routes/RouteIndex/routes';

export default function App() {
  return (
    <NavigationContainer>
        <RouteIndex />
    </NavigationContainer>
  );
}

