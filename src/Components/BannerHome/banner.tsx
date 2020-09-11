import * as React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const {width} = Dimensions.get("window");
const  images = [
    require('../../../assets/banners/550x275/banner_augustocury.png'),
    require('../../../assets/banners/550x275/banner_augustocury.png'),
]

export default function BannerHome() {
    return(
        <View>
            <ScrollView 
                horizontal 
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                {
                    images.map((image) => (
                        <TouchableOpacity>
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
    }
})