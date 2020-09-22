import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import Footer from '../../Components/Footer/footer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import Perfil from './profile';
import Login from './login';

const [logado, setLogado] = useState('');
const [page, setPage] = useState(false);

export default function Profile ({navigation}) {
    verificaLogin();
    if(logado === 'true'){
        setPage(true);
    } else {
        setPage(false);
    }
    return(
        <View>
            {page ? 
                <Perfil navigation={navigation} />
                :
                <Login navigation={navigation} />

            }
        </View>
    )
}


async function verificaLogin() {
    var token = await AsyncStorage.getItem('@BauDeLivros:userToken');
    if(token !== null){
        setLogado('true');
    } else {
        setLogado('false');
    }

    
}