import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../service/api';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Footer from '../../Components/Footer/footer';



const {width, height} = Dimensions.get("window");


export default function Login ({navigation}) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    
    async function saveToken(user) {
        await AsyncStorage.setItem('@BauDeLivros:userToken', JSON.stringify(user))
    }

    function fazLogin() {
        const fazerLogin = {email: login, senha: password};
        api.post('/validaUsuario', fazerLogin).then((res) => {
            saveToken(res.data.token);
            navigation.navigate('Home');
        }).catch((error) => {
        })
    }
    return(
        <View style={estilo.main}>
            <View style={[estilo.container, estilo.containerPrincipal]}>
                <View style={estilo.loginContainer}>
                        <View style={estilo.container}></View>
                        <View style={[estilo.container, estilo.containerInput]}>
                            <Text>Email:</Text>
                            <TextInput 
                                style={estilo.input}
                                placeholder="exemplo@exemplo.com"
                                onChangeText={ (text) => setLogin(text)}
                            ></TextInput>
                            <Text>Senha:</Text>
                            <TextInput 
                                style={estilo.input}
                                placeholder="senha"
                                secureTextEntry={true}
                                onChangeText={ (text) => setPassword(text)}
                            ></TextInput>
                            <TouchableOpacity 
                                style={estilo.login}
                                onPress={() => fazLogin()}
                            >
                                <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={estilo.cadastrar}
                                onPress={() => navigation.navigate('Cadastrar')}
                            >
                                <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Quero me cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                </View>
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
        flex: 1,
    },
    containerPrincipal:{
        alignContent: 'center', 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000030'
    },
    loginContainer: {
        width: (width/10)*8,
        height: (height/10)*7,
        backgroundColor: '#fff',
        borderColor: '#dee2e6',
        borderWidth: 1,
    },
    containerInput: {
        alignItems: 'center'
    },
    input: {
        width: (width/10)*7,
        height: 35,
        borderColor: '#000',
        borderWidth: 1,
    },
    login: {
        backgroundColor:'#08a39ebf',
        width: (width/10)*7,
        height: 45,
        marginTop: 15,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cadastrar: {
        backgroundColor:'#08a39ebf',
        width: (width/10)*7,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    }
});