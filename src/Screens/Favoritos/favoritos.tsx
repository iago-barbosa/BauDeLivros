import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import Footer from '../../Components/Footer/footer';
import estilo from './favitosEstilo';

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

