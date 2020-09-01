import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RouteIndex from '../RouteMain/routes';
const Drawer = createDrawerNavigator();

export default function NavCategory({ navigation }) {
        return (
            <Drawer.Navigator initialRouteName="RouteIndex" drawerContent={ () => <CustomDrawerComp navigation={navigation} /> }>
                <Drawer.Screen name="RouteIndex" component={RouteIndex} />
            </Drawer.Navigator>
        );
}

function CustomDrawerComp ({ navigation }) {
    return(
        <DrawerContentScrollView>
            <View>
                <TouchableOpacity>
                    <Text >Outlet</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );

    
}