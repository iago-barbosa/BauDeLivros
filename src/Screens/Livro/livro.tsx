import React, { useEffect, useState}from 'react';
import api from '../../service/api';
import { Text, View, Image, TouchableOpacity, ScrollView, Linking} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Footer from '../../Components/Footer/footer';
import estilo from './livroCSS';

import Imagens from '../../Components/Imagens/index';

export default function Livro ({route, navigation}) {
    const [ livro, setLivro] = useState([]);
    const { _id } = route.params; 
    useEffect(() => {
        api.get('/buscaLivro/'+_id).then((res) => { 
            setLivro(res.data);
        })
    }, [])


    return(
        <View style={estilo.main}>
            <View style={estilo.container}>
                <ScrollView 
                    style={estilo.container}
                >
                    {
                        livro.map((res:any) => {
                            return (
                                <View key={res._id} style={estilo.container}>
                                    <Image style={estilo.capaItem} source={Imagens[res.imagem]}></Image>
                                    <View style={estilo.infoItem}>
                                        <Text style={estilo.tituloItem}>{res.nome}</Text>
                                        <Text style={estilo.autorItem}>{res.autor.nome}</Text>
                                        <Text style={estilo.categoriaItem}>Categoria:  {res.categoria}</Text>
                                        <Text style={estilo.resumo}>Resumo: {res.resumo}</Text>
                                        <View style={estilo.tagItemContainer}>
                                            {
                                                 res.tag.map((tags:any) =>(
                                                     <TouchableOpacity key={tags} style={estilo.tagItem}>
                                                         <Text>{tags}</Text>
                                                     </TouchableOpacity>
                                                 ))
                                             }
                                        </View>
                                        <TouchableOpacity onPress={() => Linking.openURL(res.link)} style={estilo.link}>
                                            <Text style={{color: '#fff', fontWeight: '700', fontSize: 16}}>Acesse o livro aqui</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            )
                        })
                    }
                </ScrollView>
            </View>
            <Footer navigation={navigation} />
        </View>
    );
}

