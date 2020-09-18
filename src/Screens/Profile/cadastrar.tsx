import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Footer from '../../Components/Footer/footer';



const {width, height} = Dimensions.get("window");


export default function Cadastrar ({navigation}) {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');


    function fazLogin() {
        console.log(login);
        console.log(senha);
    }
    return(
        <View style={estilo.main}>
            <View style={estilo.container}>
            </View>
            <Footer navigation={navigation} />
        </View>
    );
}

const estilo = StyleSheet.create({
    main: {
        flex: 1,
        alignContent: 'center', 
        justifyContent: 'center'
    },
    container: {
        flex: 1
    },
})