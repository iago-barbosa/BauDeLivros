import React, {useEffect, useState } from 'react';
import api from '../../service/api';
import { Text, View, StyleSheet, Dimensions, Picker} from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import DatePicker from 'react-native-datepicker';
import Footer from '../../Components/Footer/footer';
import { Value } from 'react-native-reanimated';
//"@types/react-native-datepicker": "^1.7.0",


const {width, height} = Dimensions.get("window");


export default function CadastrarLivro ({navigation}) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [categoria, setCategoria] = useState('');
    const [listc, setListc] = useState([]);
    const [tag, setTag] = useState('');
    const [idioma, setIdioma] = useState('');
    const [listatag, setListatag] = useState([]);
    const [link, setLink] = useState('');
    const [resumo, setResumo] = useState('');

    function cadastrar(){
        AsyncStorage.getItem('@BauDeLivros:userToken').then((value) =>{
            api.defaults.headers.common['Authorization'] = 'Bearer '+value;
            api.post('/cadastraLivro',  
                {nome: nome, data: data,categoria: categoria,tag: [tag],idioma: idioma,link: link,resumo: resumo}
            ).then((res) => {
                navigation.navigate('MeusLivros');
            })
        })
    }

    useEffect(() => {
        api.get('/categoria').then((res) => {
            setListc(res.data)
        })
    }, [])

    useEffect(() => {
        api.get('/tags').then((res) => {
            setListatag(res.data)
        })
    }, [])


    return(
        <View style={estilo.main}>
            <View style={estilo.container}>
                <ScrollView>

                    <View style={estilo.containerInput}>
                        <Text>Nome da Obra:</Text>
                        <TextInput
                            style={estilo.input}
                            placeholder="Guerra e Paz"
                            onChangeText={(text) => setNome(text)}
                        ></TextInput>
                    </View>
                    
                    <View style={estilo.containerInput}>
                        <Text>Data do livro:</Text>
                        <DatePicker 
                            format="YYYY-MM-DD"
                            style={estilo.date}
                            mode="date"
                            placeholder="select date"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            date={data}
                            onDateChange={(date) => {setData(date)}}
                        />
                    </View>

                    <View style={estilo.containerInput}>
                        <Text>Idioma:</Text>
                        <TextInput
                            style={estilo.input}
                            placeholder="Portugues-BR"
                            onChangeText={(text) => setIdioma(text)}
                        ></TextInput>
                    </View>

                    <View style={estilo.containerInput}>
                        <Text>Categoria:</Text>
                        <Picker
                            selectedValue={categoria}
                            onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
                        >
                            <Picker.Item label="Escolha a Categoria" value="" />
                            {
                                listc.map((res:any) => {
                                    return(
                                        <Picker.Item key={res._id} label={res.nome} value={res.nome} />
                                    )
                                })
                            }
                        </Picker>
                    </View>

                    <View style={estilo.containerInput}>
                        <Text>Tag:</Text>
                        <Picker
                            selectedValue={tag}
                            onValueChange={(itemValue, itemIndex) => setTag(itemValue)}
                        >
                            <Picker.Item label="Tag Inicial do livro" value="" />
                            {
                                listatag.map((res:any) => {
                                    return(
                                        <Picker.Item key={res._id} label={res.tag} value={res.tag} />
                                    )
                                })
                            }
                        </Picker>
                    </View>

                    <View style={estilo.containerInput}>
                        <Text>Resumo:</Text>
                        <TextInput
                            style={estilo.input}
                            placeholder="Guerra e Paz é um romance histórico escrito pelo autor russo Liev Tolstói e publicado entre 1865 e 1869 no Russkii Vestnik, um periódico da época."
                            onChangeText={(text) => setResumo(text)}
                        ></TextInput>
                    </View>

                    <View style={estilo.containerInput}>
                        <Text>Link do Livro:</Text>
                        <TextInput
                            style={estilo.input}
                            placeholder="https://www.googledrive.com/livro"
                            onChangeText={(text) => setLink(text)}
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
        marginTop: 10,
    },
    date: {
        width: 320
    },
    input: {
        width: (width-45),
        height: 35,
        borderColor: '#000',
        borderWidth: 1,
    },
    cadastrar: {
        backgroundColor:'#08a39ebf',
        width: (width-45),
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginLeft: 25
    },
})