import React, { useState } from 'react';
import api from '../../service/api';
import { Text, View, StyleSheet, Dimensions} from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import DatePicker from 'react-native-datepicker';
import Footer from '../../Components/Footer/footer';



const {width, height} = Dimensions.get("window");


export default function Cadastrar ({navigation}) {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState('');
    const [sobre, setSobre] = useState('');

    async function saveToken(user) {
        await AsyncStorage.setItem('@BauDeLivros:userToken', user)
        navigation.navigate('Home');
    }

    function cadastrar(){
        var currentDate = new Date();
        //var params = JSON.parse('"nome":'+nome+', "senha":'+senha+',"email":'+email+',"data":'+data+',"sobre":'+sobre);
        api.post('/cadastraUsuario', 
            {
                nome: nome, 
                senha: senha, 
                email: email, 
                fotoPerfil: '',
                fotoCapa: '', 
                sobre: sobre, 
                idade: data, 
                criadoEm: currentDate, 
                escritor: true 
            }).then((res) => {
                var token = res.data.token;
                saveToken(token)
                
        })
    }


    return(
        <View style={estilo.main}>
            <View style={estilo.container}>
                <ScrollView>
                    <View style={estilo.containerInput}>
                        <Text>Nome:</Text>
                        <TextInput
                            style={estilo.input}
                            placeholder="João Roberto"
                            onChangeText={(text) => setNome(text)}
                        ></TextInput>
                    </View>

                    <View style={estilo.containerInput}>
                        <Text>Senha:</Text>
                        <TextInput
                            style={estilo.input}
                            placeholder="********"
                            secureTextEntry={true}
                            onChangeText={(text) => setSenha(text)}
                        ></TextInput>
                    </View>

                    <View style={estilo.containerInput}>
                        <Text>Email:</Text>
                        <TextInput
                            style={estilo.input}
                            placeholder="exemplo@exemplo.com"
                            onChangeText={(text) => setEmail(text)}
                        ></TextInput>
                    </View>

                    <View style={estilo.containerInput}>
                        <DatePicker 
                            format="YYYY-MM-DD"
                            style={estilo.date}
                            mode="date"
                            placeholder="select date"
                            minDate="1900-01-01"
                            maxDate="2007-01-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            date={data}
                            onDateChange={(date) => {setData(date)}}
                        />
                    </View>

                    <View style={estilo.containerInput}>
                        <Text>Sobre:</Text>
                        <TextInput
                            style={estilo.input}
                            placeholder="Fale sobre você"
                            onChangeText={(text) => setSobre(text)}
                        ></TextInput>
                    </View>

                    <TouchableOpacity 
                        onPress={cadastrar}
                        style={estilo.cadastrar}
                    >
                        <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Cadastrar</Text>
                    </TouchableOpacity>
                </ScrollView>
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
    containerInput: {
        marginLeft: 25,
        marginTop: 10
    },
    date: {
        width: 320
    },
    input: {
        width: (width-30),
        height: 35,
        borderColor: '#000',
        borderWidth: 1,
    },
    cadastrar: {
        backgroundColor:'#08a39ebf',
        width: (width-30),
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginLeft: 25
    },
})