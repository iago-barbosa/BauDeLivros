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

function CustomDrawerComp () {
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