import * as React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const {width} = Dimensions.get("window");
const  images = [
    {
        id: 0,
        link: require('../../../../assets/banners/550x275/banner_augustocury.png'),
    },
    {
        id: 1,
        link: require('../../../../assets/banners/550x275/banner_augustocury.png'),
    }
]

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
                        <TouchableOpacity key={image.id} style={{}}>
                            <Image style={estilo.bannerImg} source={image.link}></Image>
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