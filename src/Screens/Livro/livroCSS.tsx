import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get("window");

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
    capaItem: {
        maxHeight: 215,
        maxWidth: 150,
        alignSelf: 'center'
    },
    infoItem: {
        flex: 1,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15
    },
    tituloItem: {
        fontWeight: 'bold',
        fontSize: 18,
        height: 50,
        textAlign: 'center'
        
    },
    autorItem: {
        fontSize: 16,
        height: 30,
        textAlignVertical: "center",
        textAlign: 'center'
    },
    categoriaItem: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: "bold"
    },
    tagItemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    resumo: {
        fontSize: 18,
        marginTop: 20,
        textAlign: "justify"
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
    link: {
        backgroundColor:'#08a39ebf',
        width: (width-20),
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
});

export default estilo;