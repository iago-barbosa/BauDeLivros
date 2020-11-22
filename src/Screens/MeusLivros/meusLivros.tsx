import React, { useEffect, useState}from 'react';
import api from '../../service/api';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import Footer from '../../Components/Footer/footer';
import AsyncStorage from '@react-native-community/async-storage';
import Imagens from '../../Components/Imagens/index';
import Login from '../Profile/login';

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
    if(validacao === true){
        return(
            <View style={estilo.main}>
                <View style={estilo.headerMeusLivros}>
                    <TouchableOpacity style={estilo.adicionarLivro}>
                        <Text style={estilo.adicionarTexto}>Adicionar Livro</Text>
                        <Image style={estilo.icons} source={require('../../../assets/mais.png')}></Image>
                    </TouchableOpacity>
                </View>
                <ScrollView 
                        style={estilo.container}
                        >
                        {
                            livros.map((res:any) =>{
                                    console.log(res);
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

const estilo = StyleSheet.create({
    main: {
        flex: 1,
        alignContent: 'center', 
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        alignContent: 'center', 
    },
    headerMeusLivros:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        height: 65,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#d3d3d3'
    },
    adicionarLivro: {
        flexDirection: 'row',
    },
    icons: {
        width: 35,
        height: 35
    },
    adicionarTexto: {
        marginRight: 15,
        fontSize: 22
    },
    semLivro: {
        marginVertical: 10,
        marginHorizontal: 5,
        height: 50,
        justifyContent: 'center'
    },
    semLivroText: {
        fontSize: 18,
        textAlign: "center"
    },
    item: {
        height: 215,
        flexDirection: "row",
        marginVertical: 10,
        marginHorizontal: 5,
        backgroundColor: '#d6fefd33',
        borderWidth: 1,
        borderColor: '#d6fefd4d'
    },
    capaItem: {
        maxHeight: 215,
        maxWidth: 150
    },
    infoItem: {
        flex: 1,
        marginTop: 10,
        marginLeft: 15
    },
    tituloItem: {
        fontWeight: 'bold',
        fontSize: 18,
        height: 50,
        
    },
    autorItem: {
        fontSize: 16,
        height: 30,
        textAlignVertical: "center"
    },
    categoriaItem: {
        marginTop: 10,
        fontSize: 16
    },
    tagItemContainer: {
        position: 'absolute',
        bottom: 0,
        height: 50,
    },
    tagItem: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#cdcdcd',
        borderRadius: 10,
        height: 35,
        marginVertical: 7.5,
        marginHorizontal: 5,
        paddingHorizontal: 5,
        justifyContent: 'center'
    },
});