import * as React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions, Text } from 'react-native';
import { State } from 'react-native-gesture-handler';

const {width} = Dimensions.get("window");
const  images = [
    require('../../../assets/banners/550x275/banner_augustocury.png'),
    require('../../../assets/banners/550x275/banner_augustocury.png'),
]

function handleOnScroll (event) {
    console.log(event);
    console.log("separador");
}

export default function BannerHome() {

    return(
        <View>
            <ScrollView 
                horizontal 
                pagingEnabled
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
            >
                {
                    images.map((image) => (
                        <TouchableOpacity style={{}}>
                            <Image style={estilo.bannerImg} source={image}></Image>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const estilo = StyleSheet.create({
    bannerImg: {
        resizeMode: 'contain',
        width: width,
        margin: 0,
        height: 206,
    },
    pagination:{
        flexDirection: 'row', 
        position: 'absolute', 
        bottom: 0, 
        alignSelf: 'center'
    },
    paginationText: {
        fontSize: 30, 
        color: '#888'
    },
    paginationActiveText: {
        fontSize: 30, 
        color: '#fff'
    },
})