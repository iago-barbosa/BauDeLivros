import React, { useEffect, useState}from 'react';
import api from '../../service/api';
import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import Footer from '../../Components/Footer/footer';
import Imagens from '../../Components/Imagens/index';

export default function Categoria ({route, navigation}) {
    const { nome } = route.params;
    const [ categoria, setCategoria] = useState([])

    useEffect(() => {
        api.get('/livroCategoria/'+nome).then((res) => {
            setCategoria(res.data)
        })
    }, [])
    return(
        <View style={estilo.main}>
            <View style={estilo.container}>
                <ScrollView 
                    style={estilo.container}
                >
                    {
                        categoria.map((res:any) =>{
                            return (
                                 <TouchableOpacity onPress={() => navigation.navigate('Livro', {_id: res._id})} key={res._id} style={estilo.item}>
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

                        )})
                    }
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
        alignContent: 'center', 
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