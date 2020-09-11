import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Footer from '../../Components/Footer/footer';
import BannerHome from '../../Components/BannerHome/banner';
import { Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function Home () {
    return(
        <View style={estiloHome.main}>
            <View style={estiloHome.container}>
                <BannerHome />
                <Text style={{fontSize: 24, textAlign: 'center'}}>
                    Aqui está a Home!
                </Text>

            </View>
            <Footer />
        </View>
    );
}

const estiloHome = StyleSheet.create({
    main: {
        flex: 1,
        alignContent: 'center', 
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        alignContent: 'center'
    },
});