import * as React from 'react';
import {StyleSheet} from 'react-native';

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

export default estilo;