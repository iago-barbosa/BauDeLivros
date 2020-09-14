import React, { useEffect, useState} from 'react';
import api from '../../../service/api';
import { View, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions, Text } from 'react-native';

const {width} = Dimensions.get("window");


export default function Categorias({navigation}) {
    const [ categorias, setCategorias] = useState([])

    useEffect(() => {
        api.get('/categoria').then((res) => {
            setCategorias(res.data)
        })
    }, [])

    return(
        <View style={estilo.CatContainer}>
            <Text style={estilo.Titulo}>Categorias</Text>
            <ScrollView 
                horizontal 
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                style={estilo.Scroll}
            >
                {
                    categorias.map((res:any) => (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Categoria', {id: res._id, nome: res.nome})}
                            key={res._id} style={estilo.Item}>
                            <Text style={estilo.ItemText}>{res.nome}</Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const estilo = StyleSheet.create({
    CatContainer: {
        marginTop: 10,
    },
    Scroll: {
        marginTop: 5,
        height: 80,
    },
    Titulo: {
        fontSize: 20, 
        textAlign: 'center'
    },
    Item: {
        //width: width/4,
        backgroundColor: '#0bbdb7',
        marginHorizontal: (width/100)*4.166666667,
        marginVertical: 5,
        borderRadius: 10,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#08a39e',
        minWidth: width/4

    },
    ItemText: {
        textAlign: 'center',
        color: '#fff'
    }
})