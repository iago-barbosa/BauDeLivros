import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RouteIndex from '../RouteMain/routes';
const Drawer = createDrawerNavigator();

export default function NavCategory() {
        return (
            <Drawer.Navigator initialRouteName="RouteIndex" drawerContent={ () => <CustomDrawerComp /> }>
                <Drawer.Screen name="RouteIndex" component={RouteIndex} />
            </Drawer.Navigator>
        );
}

const categorias = [
    "Administração",
    "Agropecuaria",
    "Auto Ajuda",
    "Ação",
    "Aventura",
    "Gastronomia",
    "Religião",
    "Biografias",
    "Ficção Cientifica",
    "Fantasia",
    "Comedia",
    "Policial",
    "Suspense",
    "Terror",
    "Tecnologia",
    "Informática",
    "HQs",
    "Mangás",
    "Contos",
    "Poesia",
]

function CustomDrawerComp () {
    return(
        <DrawerContentScrollView style={estiloDrawer.main} >
            <View style={estiloDrawer.container}>
                {
                    categorias.map((titulo) => (
                        <TouchableOpacity key={titulo} style={estiloDrawer.categoriaItem}>
                            <Text style={estiloDrawer.itemNome}>{titulo}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </DrawerContentScrollView>
    );    
}

const estiloDrawer = StyleSheet.create({
    main: {
        backgroundColor: '#08a39e'
    },
    container: {
        marginTop: 40
    },
    categoriaItem: {
        backgroundColor: '#08a39e',
        borderTopWidth: 1,
        borderColor: '#39B5B1',
        height: 60,
        justifyContent: 'center'
    },
    itemNome: {
        fontSize: 18,
        marginLeft: 15,
        color: '#fff'
    }
});