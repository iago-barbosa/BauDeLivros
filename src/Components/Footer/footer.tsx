import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import api from '../../service/api';
import AsyncStorage from '@react-native-community/async-storage';
import { useRoute } from '@react-navigation/native';

export default function Footer({ navigation }) {
    return(
        <View style={estiloFooter.container}>
            <TouchableOpacity style={estiloFooter.buttons} onPress={() => navigation.navigate('Home')}>
                <Image style={estiloFooter.icons} source={require('../../../assets/casa.png')} />
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estiloFooter.buttons} onPress={() => navigation.navigate('Busca')}>
                <Image style={estiloFooter.icons} source={require('../../../assets/search.png')} />
                <Text>Busca</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estiloFooter.buttons} onPress={() => navigation.navigate('Favoritos')}>
                <Image style={estiloFooter.icons} source={require('../../../assets/coracao.png')} />
                <Text>Favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estiloFooter.buttons}  onPress={() => navigateMeusLivros(navigation)}>
                <Image style={estiloFooter.icons} source={require('../../../assets/livro.png')} />
                <Text>Meus Livros</Text>
            </TouchableOpacity>
        </View>
    );
};

async function navigateMeusLivros(navigation) {
    //onPress={() => navigation.navigate('MeusLivros')}
    AsyncStorage.getItem('@BauDeLivros:userToken').then((value) =>{
        api.defaults.headers.common['Authorization'] = 'Bearer '+value;
        api.post('/validaToken').then((res) => {
            navigation.navigate('MeusLivros', {validacao: true});
        })
        .catch((error) => {
            navigation.navigate('MeusLivros', {validacao: false});
        })
    });
}

const estiloFooter = StyleSheet.create({
    container: {
        bottom: 0,
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 60
    },
    buttons: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icons: {
        width: 20,
        height: 20
    }
});