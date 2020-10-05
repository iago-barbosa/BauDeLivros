import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import Footer from '../../Components/Footer/footer';
import { TouchableOpacity } from 'react-native-gesture-handler';

//import AsyncStorage from '@react-native-community/async-storage';
//    AsyncStorage.removeItem('@BauDeLivros:userToken');

const {width} = Dimensions.get("window");

export default function Profile({ navigation }) {
    const [usuarios, setUsuarios] = useState([]);

    
    useEffect(() => {
        AsyncStorage.getItem('@BauDeLivros:userToken').then((value) => {
            api.defaults.headers.common['Authorization'] = 'Bearer ' + value;
            api.get('/usuarioInfo').then((res) => {
                setUsuarios(res.data);
            })
        })
    }, [])


    return (
        <View style={estilo.main}>
            {
                usuarios.map((res:any) =>{
                    var currentDate = new Date();
                    var idade = res.idade.split('-');
                    var idadeAtual = currentDate.getFullYear() - idade[0];
                    if(currentDate.getMonth() < idade[1]){
                        idadeAtual = idadeAtual - 1
                    }
                    
                    
                    return(
                        <View style={estilo.main} key={res.id}>
                            <View style={estilo.container}>
                            {res.fotoCapa == '' ?
                                <ImageBackground style={{flex: 1,justifyContent: "center"}} source={require('../../../assets/imgParaBd/Usuario/Default/capa.png')}>
                                    {res.fotoPerfil == ''?
                                        <View style={estilo.perfilImg}>
                                            <Image style={estilo.img} source={require('../../../assets/imgParaBd/Usuario/Default/perfil.png')}></Image>
                                        </View>
                                        :
                                        <View style={estilo.perfilImg}>
                                            <Image style={estilo.img} source={require('../../../assets/imgParaBd/Usuario/MachadoDeAssis/perfil.png')}></Image>
                                        </View> 

                                    }
                                </ImageBackground>
                                :
                                <ImageBackground style={{flex: 1,justifyContent: "center"}} source={require('../../../assets/imgParaBd/Usuario/MachadoDeAssis/capa.png')}>
                                    {res.fotoPerfil == ''?
                                        <View style={estilo.perfilImg}>
                                            <Image style={estilo.img} source={require('../../../assets/imgParaBd/Usuario/Default/perfil.png')}></Image>
                                        </View>
                                        :
                                        <View style={estilo.perfilImg}>
                                            <Image style={estilo.img} source={require('../../../assets/imgParaBd/Usuario/MachadoDeAssis/perfil.png')}></Image>
                                        </View> 
                                    }
                                </ImageBackground>
                            }
                            </View>
                            <View style={estilo.container}>
                                <Text style={estilo.nome}>{res.nome}</Text>
                                <View style={estilo.containerInfo}>
                                    <View style={estilo.info}>
                                        <Text style={estilo.infoTitulo}>Idade:</Text>
                                        <Text style={estilo.infoTexto}>{idadeAtual}</Text>
                                    </View>
                                    <View style={estilo.info}>
                                        <Text style={estilo.infoTitulo}>Obras Plublicadas:</Text>
                                        <Text style={estilo.infoTexto}>0</Text>
                                    </View>
                                </View>
                                <View style={estilo.container}>
                                    <Text style={estilo.tituloSobre}>Sobre</Text>
                                    <Text style={estilo.textoSobre}>
                                        {res.sobre}
                                    </Text>
                                </View>
                                <TouchableOpacity style={estilo.btnEditar}>
                                    <Text style={{textAlign: 'center', color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Editar Perfil</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })

            }
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
        left: -25,
        top: -150,
        maxWidth: (width/6)*5,
        resizeMode: "contain"
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
    tituloSobre: {
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