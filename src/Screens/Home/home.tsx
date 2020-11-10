import * as React from 'react';
import {  View, StyleSheet, ScrollView} from 'react-native';
import Footer from '../../Components/Footer/footer';
import BannerHome from './BannerHome/banner';
import Categorias from './Categorias/categoriasHome';
import Lancamentos from './Lancamentos/lancamentos';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

export default function Home ({navigation}) {
    return(
        <View style={estiloHome.main}>
            <ScrollView style={estiloHome.container}>
                <BannerHome />
                <Categorias navigation={navigation}/> 
                <Lancamentos />
            </ScrollView>
            <Footer navigation={navigation} />
        </View>
    );
}

const estiloHome = StyleSheet.create({
    main: {
        flex: 1,
        alignContent: 'center', 
        justifyContent: 'center',
        backgroundColor: '#d6fefd1A',
    },
    container: {
        flex: 1,
        alignContent: 'center'
    },
});