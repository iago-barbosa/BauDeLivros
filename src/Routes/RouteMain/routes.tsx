import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Busca from '../../Screens/Busca/busca';
import Favoritos from '../../Screens/Favoritos/favoritos';
import Header from '../../Components/Header/header';
import Home from '../../Screens/Home/home';
import MeusLivros from '../../Screens/MeusLivros/meusLivros';
import Profile from '../../Screens/Profile/profile';

const Stack = createStackNavigator();

export default function RouteIndex () {
    return(
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Busca" options={{ header: props => <Header navigation={props.navigation} /> }} component={Busca} />
            <Stack.Screen name="Favoritos" options={{ header: props => <Header navigation={props.navigation} /> }} component={Favoritos} />
            <Stack.Screen name="Home" options={{ header: props => <Header navigation={props.navigation} /> }} component={Home} />
            <Stack.Screen name="MeusLivros" options={{ header: props => <Header navigation={props.navigation} /> }} component={MeusLivros} />
            <Stack.Screen name="Profile" options={{ header: props => <Header navigation={props.navigation} /> }} component={Profile} />
        </Stack.Navigator>
    );
}