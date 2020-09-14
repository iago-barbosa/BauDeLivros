import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Footer from '../../Components/Footer/footer';

const {width} = Dimensions.get("window");

export default function Busca ({navigation}) {
    return(
        <View style={estilo.main}>
            <View style={estilo.container}>
                <View style={estilo.buscaContainer}>
                    <TextInput
                        style={estilo.buscaInput}
                    />
                    <TouchableOpacity style={estilo.btnBusca}>
                        <Image style={estilo.icons} source={require('../../../assets/search.png')} />
                    </TouchableOpacity>
                </View>
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
    },
    buscaContainer: {
        flexDirection: 'row',
        height: 65,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#d3d3d3'
        
    },
    buscaInput: {
        height: 40,
        borderColor: '#c3c3c3',
        borderWidth: 1,
        marginVertical: 10,
        width: (width/6)*4,
        marginLeft: width/12
    },
    icons: {
        width: 30,
        height: 30
    },
    btnBusca: {
        flex: 1,
        width: (width/6)*1.5,
        alignItems:'center',
        justifyContent: 'center'
    }
});