import React, { useState } from 'react';
import Perfil from './profile';
import Login from './login';


export default function Profile ({ navigation, route }) {
    const { validacao } = route.params;
    if(validacao === true){
        return(
            <Perfil navigation={navigation} />
        )
    } else {
        return(
            <Login navigation={navigation} />
        )
    }
    
}