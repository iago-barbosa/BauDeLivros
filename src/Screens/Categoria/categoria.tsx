import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Footer from '../../Components/Footer/footer';

export default function Busca ({navigation}) {
    return(
        <View style={estilo.main}>
            <View style={estilo.container}>
                <Text>Categoria</Text>
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
        alignContent: 'center', 
        justifyContent: 'center'
    }
});