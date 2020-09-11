import * as React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions, Text } from 'react-native';

const {width} = Dimensions.get("window");

const categorias = [
    "Ficção Cientifica",
    "Ação",
    "Aventura",
    "Terror",
    "Comedia",
    "Religioso",
    "Auto-Ajuda"
]

export default function BannerHome() {
    var state = {
        active: 0
    }

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
                    categorias.map((texto) => (
                        <TouchableOpacity style={estilo.Item}>
                            <Text style={estilo.ItemText}>{texto}</Text>
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
        width: width/4,
        backgroundColor: '#9783de',
        marginHorizontal: (width/100)*4.166666667,
        marginVertical: 5,
        borderRadius: 10,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#543DA6'

    },
    ItemText: {
        textAlign: 'center',
        color: '#fff'
    }
})