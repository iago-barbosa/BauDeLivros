import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';

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
            <TouchableOpacity style={estiloFooter.buttons} onPress={() => navigation.navigate('MeusLivros')}>
                <Image style={estiloFooter.icons} source={require('../../../assets/livro.png')} />
                <Text>Meus Livros</Text>
            </TouchableOpacity>
        </View>
    );
};

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