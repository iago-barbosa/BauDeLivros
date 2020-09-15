import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import Footer from '../../Components/Footer/footer';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Profile ({navigation}) {
    return(
        <View style={estilo.main}>
            <View style={estilo.container}>
                <ImageBackground style={{flex: 1,justifyContent: "center"}} source={require('../../../assets/imgParaBd/Usuario/Machado de Assis/capa.png')}>
                    <View style={estilo.perfilImg}>
                        <Image style={estilo.img} source={require('../../../assets/imgParaBd/Usuario/Machado de Assis/perfil.png')}></Image>
                    </View>
                </ImageBackground>
            </View>
            <View style={estilo.container}>
                <Text style={estilo.nome}>Machado de Assis</Text>
                <View style={estilo.containerInfo}>
                    <View style={estilo.info}>
                        <Text style={estilo.infoTitulo}>Idade:</Text>
                        <Text style={estilo.infoTexto}>181</Text>
                    </View>
                    <View style={estilo.info}>
                        <Text style={estilo.infoTitulo}>Obras Plublicadas:</Text>
                        <Text style={estilo.infoTexto}>236</Text>
                    </View>
                </View>
                <View style={estilo.container}>
                    <Text style={estilo.tituloSobre}>Sobre</Text>
                    <Text style={estilo.textoSobre}>
                        Principal nome do Realismo brasileiro, o primeiro presidente da 
                        Academia Brasileira de Letras e um dos escritores mais aclamados da literatura. 
                        O carioca nascido no Morro do Livramento atuou como jornalista, crítico, cronista, 
                        dramaturgo e poeta.
                    </Text>
                </View>
                <TouchableOpacity style={estilo.btnEditar}>
                    <Text style={{textAlign: 'center', color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Editar Perfil</Text>
                </TouchableOpacity>
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
    },
    containerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
    },
    info: {
        flexDirection: 'row'
    },
    infoTitulo: {
        fontWeight: 'bold',
        fontSize: 16
    },
    infoTexto: {
        fontSize: 16,
        paddingLeft: 10
    },
    perfilImg: {
        marginTop: 10,
        width: 300,
        height: 300,
        borderRadius: 150,
        alignSelf: "center",
        overflow: 'hidden'
    },
    img: {
        position: 'absolute',
        left: -25
    },
    nome: {
        textAlign: 'center',
        marginTop: 25,
        fontSize: 24
    },
    btnEditar: {
        marginVertical: 15,
        height: 50,
        width: 200,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#3acbc7',
        borderRadius: 15
    },
    tituloSobre:{
        textAlign: 'center',
        marginTop: 25,
        fontSize: 24
    },
    textoSobre: {
        textAlign: 'justify',
        marginHorizontal: 25,
        color: '#474a51'
    }
});