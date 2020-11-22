import React, { useEffect, useState}from 'react';
import api from '../../service/api';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import Footer from '../../Components/Footer/footer';
import AsyncStorage from '@react-native-community/async-storage';
import Imagens from '../../Components/Imagens/index';
import Login from '../Profile/login';
import estilo from './meusLivrosCSS';

export default function MeusLivros ({ navigation, route }) {
    const [ livros, setLivros] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('@BauDeLivros:userToken').then((value) =>{
            api.defaults.headers.common['Authorization'] = 'Bearer '+value;
            api.get('/MeusLivros').then((res) => {
                setLivros(res.data);
            })
        })
    }, []) 
    const { validacao } = route.params;

    function cadastraLivro(){
        navigation.navigate('CadastrarLivros')
    }

    if(validacao === true){
        return(
            <View style={estilo.main}>
                <View style={estilo.headerMeusLivros}>
                    <TouchableOpacity onPress={cadastraLivro} style={estilo.adicionarLivro}>
                        <Text style={estilo.adicionarTexto}>Adicionar Livro</Text>
                        <Image style={estilo.icons} source={require('../../../assets/mais.png')}></Image>
                    </TouchableOpacity>
                </View>
                <ScrollView 
                        style={estilo.container}
                        >
                        {
                            livros.map((res:any) =>{
                                    if(res.message){
                                        return(
                                            <View key={res.message} style={estilo.semLivro}>
                                                <Text style={estilo.semLivroText}>Você ainda não adicionou nenhum livro.</Text>
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
                                                     <ScrollView
                                                         horizontal
                                                         showsHorizontalScrollIndicator={false}
                                                         style={estilo.tagItemContainer}
                                                     >
                                                         {
                                                             res.tag.map((tags:any) =>(
                                                                 <TouchableOpacity key={tags} style={estilo.tagItem}>
                                                                     <Text>{tags}</Text>
                                                                 </TouchableOpacity>
                                                             ))
                                                         }
                                                     </ScrollView>
                                                 </View>
                                             </TouchableOpacity>
                                        )
                                    }
                            })
    
                        }
                    </ScrollView>
                <Footer navigation={navigation} />
            </View>
        );
    } else {
        return(
            <Login navigation={navigation} />
        )
    }
    
}