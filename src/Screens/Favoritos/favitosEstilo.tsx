import * as React from 'react';
import { StyleSheet } from 'react-native';

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

export default estilo;