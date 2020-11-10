import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import Footer from '../../Components/Footer/footer';



const {width, height} = Dimensions.get("window");


export default function Cadastrar ({navigation}) {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [data, setData] = useState('');


    function fazLogin() {
        console.log(login);
        console.log(senha);
    }
    return(
        <View style={estilo.main}>
            <View style={estilo.container}>
                <View style={estilo.containerInput}>
                    <Text>Nome:</Text>
                    <TextInput
                        style={estilo.input}
                        placeholder="exemplo@exemplo.com"
                    ></TextInput>
                </View>

                <View style={estilo.containerInput}>
                    <Text>Senha:</Text>
                    <TextInput
                        style={estilo.input}
                        placeholder="exemplo@exemplo.com"
                    ></TextInput>
                </View>

                <View style={estilo.containerInput}>
                    <Text>Email:</Text>
                    <TextInput
                        style={estilo.input}
                        placeholder="exemplo@exemplo.com"
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
                        placeholder="exemplo@exemplo.com"
                    ></TextInput>
                </View>

                <TouchableOpacity 
                    style={estilo.cadastrar}
                >
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Cadastrar</Text>
                </TouchableOpacity>
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