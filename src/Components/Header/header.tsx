import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { HeaderBackButton } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Header({ navigation }){
    const route = useRoute();
    return(
        <View style={headerStyle.header}>
            <StatusBar style="light"/>
            <View style={headerStyle.container}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={headerStyle.barsMenu} source={require('../../../assets/bars.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={headerStyle.logo}></TouchableOpacity>
                {route.name == "Home" ?
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Image style={[headerStyle.profile, headerStyle.icons]} source={require('../../../assets/profile.png')}></Image>
                    </TouchableOpacity>
                    :
                    <HeaderBackButton style={[headerStyle.backBtn, headerStyle.icons]} tintColor={'#fff'}  onPress={() => navigation.goBack()}/>
                } 
            </View>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    icons: {
        width: 20,
        height: 20
    },
    header: {
        backgroundColor: '#543DA6',
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
        marginTop: 20,
        marginLeft: 20,
        height: 20

    },
    profile: {
        marginTop: 20,
        marginRight: 20,
    },
    backBtn: {
        marginTop: 20,
        marginRight: 20,
    }
});