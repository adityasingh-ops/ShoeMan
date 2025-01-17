import { Dimensions, Image, Text, View } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import tw from 'twrnc';
import { CarouselProps } from '@/assets/types/carousel';

const ImageCarousel = ({renderItem, Carouselwidth}:CarouselProps) => {
    const width = Carouselwidth ? Carouselwidth : Dimensions.get('window').width * 0.95;

    return (
        <View style={{ height: width / 2, marginVertical: 10, marginRight: 10 }}>
            <Carousel
                loop
                width={width}
                height={width / 3}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    renderItem(index)
                )}
            />
        </View>

    )
}

export default ImageCarousel
