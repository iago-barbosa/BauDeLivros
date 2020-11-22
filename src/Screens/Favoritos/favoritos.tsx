import React, { useEffect, useState}from 'react';
import api from '../../service/api';
import { Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Footer from '../../Components/Footer/footer';
import estilo from './favitosEstilo';

import Imagens from '../../Components/Imagens/index';

export default function Favoritos ({navigation}) {
    const [ favoritos, setFavoritos] = useState([]);
    useEffect(() => {
        AsyncStorage.getItem('@BauDeLivros:userToken').then((value) =>{
            api.defaults.headers.common['Authorization'] = 'Bearer '+value;
            api.get('/meusFavoritos').then((res) => {
                setFavoritos(res.data);
            })
        })
    }, [])
    return(
        <View style={estilo.main}>
            <View style={estilo.container}>
                <View style={estilo.containerFilter}>
                    <Text style={estilo.qtdFavoritos}>{favoritos.length} Livros</Text>
                    <TouchableOpacity style={estilo.btnFiltrar}>
                        <Text style={estilo.filtrarTexto}>Filtrar</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView 
                    style={estilo.container}
                >
                    {
                        favoritos.map((res:any) => {
                            if(res.message){
                                    return(
                                        <View key={res.message} style={estilo.semLivro}>
                                            <Text style={estilo.semLivroText}>Você ainda não tem favoritos.</Text>
                                        </View>
                                    )
                                } else {
                                    return (
                                        <TouchableOpacity key={res._id} style={estilo.item}>
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

