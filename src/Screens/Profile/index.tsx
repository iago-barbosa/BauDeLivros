import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import Footer from '../../Components/Footer/footer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import Perfil from './profile';
import Login from './login';


export default function Profile ({navigation}) {
    var token = AsyncStorage.getItem('@BauDeLivros:userToken');
    console.log(token);
    if(token !== null){
        return(
            <Perfil navigation={navigation} />
        )
    } else {
        return(
            <Login navigation={navigation} />
        )
    }
}