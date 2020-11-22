import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Imagens from '../../Components/Imagens/index';
import Footer from '../../Components/Footer/footer';



export default function ResultBusca({route, navigation}) {
    const { t } = route.params;
    const [search, setSearch] = useState([]);

    
    useEffect(() => {
        api.get('/busca/'+t).then((res) => {
            setSearch(res.data)
        })
    }, [])
    return(
        <View style={estilo.main}>
            <View style={estilo.container}>
                <ScrollView 
                    style={estilo.container}
                >
                    {
                        search.map((res:any) =>{
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