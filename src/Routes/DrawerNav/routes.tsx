import React, { useEffect, useState} from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import api from '../../service/api';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RouteIndex from '../RouteMain/routes';
const Drawer = createDrawerNavigator();

export default function NavCategory() {
        return (
            <Drawer.Navigator initialRouteName="RouteIndex" drawerContent={ props => <CustomDrawerComp navigation={props.navigation} /> }>
                <Drawer.Screen name="RouteIndex" component={RouteIndex} />
            </Drawer.Navigator>
        );
}




function CustomDrawerComp ({navigation}) {

    const [ categorias, setCategorias] = useState([])

    useEffect(() => {
        api.get('/categoria').then((res) => {
            setCategorias(res.data)
            console.log(categorias);
        })
    }, [])

    return(
        <DrawerContentScrollView style={estiloDrawer.main} >
            <View style={estiloDrawer.container}>
                {
                    categorias.map((res:any) => (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Categoria', {id: res._id, nome: res.nome})} 
                            key={res._id} style={estiloDrawer.categoriaItem}
                        >
                            <Text style={estiloDrawer.itemNome}>{res.nome}</Text>
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