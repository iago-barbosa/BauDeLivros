import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export default function Header({ navigation }){
    return(
        <View style={headerStyle.header}>
            <StatusBar style="light"/>
            <View style={headerStyle.container}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={headerStyle.barsMenu} source={require('../../../assets/bars.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={headerStyle.logo}></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={headerStyle.profile} source={require('../../../assets/bars.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    header: {
        backgroundColor: '#171c22',
    },
    container: {
        marginTop: 20,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'stretch',
    },
    logo: {
        flex: 1,
    },
    barsMenu: {
        marginVertical: 15,
        marginLeft: 10
    },
    profile: {
        marginVertical: 15,
        marginRight: 10
    }
});