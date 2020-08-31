import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../Screens/Home/home';
import Header from '../../Components/Header/header';

const Stack = createStackNavigator();

export default function RouteIndex () {
    return(
        <Stack.Navigator >
            <Stack.Screen name="Home" options={{ header: props => <Header navigation={props.navigation} /> }} component={Home} />
        </Stack.Navigator>
    );
}