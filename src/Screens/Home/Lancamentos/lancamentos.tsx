import React, { useEffect, useState} from 'react';
import api from '../../../service/api';
import { View, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions, Text } from 'react-native';
import Imagens from '../../../Components/Imagens/index';

const {width} = Dimensions.get("window");


export default function Lancamentos() {
    const [ lancamentos, setLancamentos] = useState([])

    useEffect(() => {
        api.get('/lancamentos').then((res) => {
            setLancamentos(res.data)
        })
    }, [])

    return(
        <View style={estilo.CatContainer}>
            <Text style={estilo.Titulo}>Lançamentos</Text>
            <ScrollView 
                horizontal 
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
            >
                {
                    lancamentos.map((res:any) => (
                        <TouchableOpacity key={res._id} style={estilo.ItemContainer}>
                            <Image style={estilo.ItemImage} source={Imagens[res.imagem]}></Image>
                            <Text style={estilo.ItemTitulo}>{res.nome}</Text>
                            <Text style={estilo.ItemAutor}>{res.autor.nome}</Text>
                        </TouchableOpacity>
                        ))
                }
                <TouchableOpacity style={[estilo.ItemContainer, estilo.VerTodosContainer]}>
                    <Text style={estilo.VerTodos}>Ver Todos</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const estilo = StyleSheet.create({
    CatContainer: {
        marginTop: 10,
    },
    Titulo: {
        fontSize: 20, 
        textAlign: 'center'
    },
    ItemContainer: {
        width: width/3,
        height: 280,
        marginHorizontal: 10,
        backgroundColor: '#fff'

    },
    ItemImage: {
        maxWidth: width/3,
        maxHeight: 200,
        resizeMode: "contain"
    },
    ItemTitulo: {
        height: 38,
        marginHorizontal: 5,
        textAlign: "center"
    },
    ItemAutor: {
        textAlign: "center",
        color: '#9d9d9d'
    },
    VerTodosContainer: {
        justifyContent: "center"
    },
    VerTodos: {
        textAlign: "center",
        fontSize: 24,
        marginHorizontal: 10 
    }
})