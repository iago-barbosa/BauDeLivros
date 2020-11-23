import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Busca from '../../Screens/Busca/busca';
import ResultBusca from '../../Screens/Busca/buscaCall';
import Cadastrar from '../../Screens/Profile/cadastrar';
import CadastrarLivros from '../../Screens/CadastrarLivros/cadastraLivro';
import Categoria from '../../Screens/Categoria/categoria';
import Favoritos from '../../Screens/Favoritos/favoritos';
import Header from '../../Components/Header/header';
import Home from '../../Screens/Home/home';
import Livro from '../../Screens/Livro/livro';
import MeusLivros from '../../Screens/MeusLivros/meusLivros';
import Profile from '../../Screens/Profile/index';
import VerTodos from '../../Screens/VerTodos/verTodos';

const Stack = createStackNavigator();

export default function RouteIndex () {
    return(
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Busca" options={{ header: props => <Header navigation={props.navigation} /> }} component={Busca} />
            <Stack.Screen name="ResultBusca" options={{ header: props => <Header navigation={props.navigation} /> }} component={ResultBusca} />
            <Stack.Screen name="Cadastrar" options={{ header: props => <Header navigation={props.navigation} /> }} component={Cadastrar} />
            <Stack.Screen name="CadastrarLivros" options={{ header: props => <Header navigation={props.navigation} /> }} component={CadastrarLivros} />
            <Stack.Screen name="Categoria" options={{ header: props => <Header navigation={props.navigation} /> }} component={Categoria} />
            <Stack.Screen name="Favoritos" options={{ header: props => <Header navigation={props.navigation} /> }} component={Favoritos} />
            <Stack.Screen name="Home" options={{ header: props => <Header navigation={props.navigation} /> }} component={Home} />
            <Stack.Screen name="Livro" options={{ header: props => <Header navigation={props.navigation} /> }} component={Livro} />
            <Stack.Screen name="MeusLivros" options={{ header: props => <Header navigation={props.navigation} /> }} component={MeusLivros} />
            <Stack.Screen name="Profile" options={{ header: props => <Header navigation={props.navigation} /> }} component={Profile} />
            <Stack.Screen name="VerTodos" options={{ header: props => <Header navigation={props.navigation} /> }} component={VerTodos} />
        </Stack.Navigator>
    );
}