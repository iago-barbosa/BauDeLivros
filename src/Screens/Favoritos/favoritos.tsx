import React, { useEffect, useState}from 'react';
import api from '../../service/api';
import { Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Footer from '../../Components/Footer/footer';
import estilo from './favitosEstilo';

import Imagens from '../../Components/Imagens/index';

export default function Favoritos ({navigation}) {
    const [ favoritos, setFavoritos] = useState([])
    var favoritosLength = 0;

    useEffect(() => {
        api.get('/livros').then((res) => {
            setFavoritos(res.data)
        })
    }, [])
    return(
        <View style={estilo.main}>
            <View style={estilo.container}>
                <View style={estilo.containerFilter}>
                    <Text style={estilo.qtdFavoritos}>{favoritos.length} Livros</Text>
                    <TouchableOpacity style={estilo.btnFiltrar}>
                        <Text style={estilo.filtrarTexto}>Filtrar</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView 
                    style={estilo.container}
                >
                    {
                        favoritos.map((res:any) =>{
                            return (
                                 <TouchableOpacity key={res._id} style={estilo.item}>
                                     <Image style={estilo.capaItem} source={Imagens[res.imagem]}></Image>
                                     <View style={estilo.infoItem}>
                                         <Text style={estilo.tituloItem}>{res.nome}</Text>
                                         <Text style={estilo.autorItem}>{res.autor.nome}</Text>
                                         <Text style={estilo.categoriaItem}>Categoria:  {res.categoria}</Text>
                                         <ScrollView
                                             horizontal
                                             showsHorizontalScrollIndicator={false}
                                             style={estilo.tagItemContainer}
                                         >
                                             {
                                                 res.tag.map((tags:any) =>(
                                                     <TouchableOpacity key={tags} style={estilo.tagItem}>
                                                         <Text>{tags}</Text>
                                                     </TouchableOpacity>
                                                 ))
                                             }
                                         </ScrollView>
                                     </View>
                                 </TouchableOpacity>

                        )})
                    }
                </ScrollView>
            </View>
            <Footer navigation={navigation} />
        </View>
    );
}

