import React, { useEffect, useState}from 'react';
import api from '../../service/api';
import { Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Footer from '../../Components/Footer/footer';
import estilo from './verTodosCSS';

import Imagens from '../../Components/Imagens/index';

export default function Favoritos ({navigation}) {
    const [ livros, setLivros] = useState([]);
    useEffect(() => {
        api.get('/verTodos').then((res) => {
            setLivros(res.data);
        })
    }, [])
    return(
        <View style={estilo.main}>
            <View style={estilo.container}>
                <ScrollView 
                    style={estilo.container}
                >
                    {
                        livros.map((res:any) => {
                            if(res.message){
                                    return(
                                        <View key={res.message} style={estilo.semLivro}>
                                            <Text style={estilo.semLivroText}>Você ainda não tem favoritos.</Text>
                                        </View>
                                    )
                                } else {
                                    return (
                                        <TouchableOpacity onPress={() => navigation.navigate('Livro', {_id: res._id})} key={res._id} style={estilo.item}>
                                            <Image style={estilo.capaItem} source={Imagens[res.imagem]}></Image>
                                            <View style={estilo.infoItem}>
                                                <Text style={estilo.tituloItem}>{res.nome}</Text>
                                                <Text style={estilo.autorItem}>{res.autor.nome}</Text>
                                                <Text style={estilo.categoriaItem}>Categoria:  {res.categoria}</Text>
                                            </View>
                                        </TouchableOpacity>

                                    )
                                }
                        })
                    }
                </ScrollView>
            </View>
            <Footer navigation={navigation} />
        </View>
    );
}

