import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import Footer from '../../Components/Footer/footer';

export default function Favoritos ({navigation}) {
    return(
        <View style={estilo.main}>
            <View style={estilo.container}>
                <View style={estilo.containerFilter}>
                    <Text style={estilo.qtdFavoritos}>5 Autores</Text>
                    <TouchableOpacity style={estilo.btnFiltrar}>
                        <Text style={estilo.filtrarTexto}>Filtrar</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilo.container}>
                    <TouchableOpacity style={estilo.item}>
                        <Image style={estilo.capaItem} source={require('../../../assets/imgParaBd/estante-para-livros.png')}></Image>
                        <View style={estilo.infoItem}>
                            <Text style={estilo.tituloItem}>Titulo Titulo TituloTitulo Titulo Titulo Titulo</Text>
                            <Text style={estilo.autorItem}>Autor</Text>
                            <Text style={estilo.categoriaItem}>Categoria:  Categoria</Text>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={estilo.tagItemContainer}
                            >
                                <TouchableOpacity style={estilo.tagItem}>
                                    <Text>TAG</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer navigation={navigation} />
        </View>
    );
}

const estilo = StyleSheet.create({
    main: {
        flex: 1,
        alignContent: 'center', 
        justifyContent: 'center',
        backgroundColor: '#d6fefd1A',
    },
    container: {
        flex: 1,
        alignContent: 'center', 
    },
    containerFilter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 65,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#d3d3d3'
    },
    qtdFavoritos: {
        textAlignVertical: 'center',
        marginLeft: 15
    },
    btnFiltrar: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
        height: 35,
        marginVertical: 15,
        marginHorizontal: 15,
        width: 65,
        justifyContent: 'center'
    },
    filtrarTexto: {
        textAlign: "center",
    },
    item: {
        height: 200,
        flexDirection: "row",
        marginVertical: 10,
        marginHorizontal: 5,
        backgroundColor: '#d6fefd33',
        borderWidth: 1,
        borderColor: '#d6fefd4d'
    },
    capaItem: {
        maxHeight: 200,
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