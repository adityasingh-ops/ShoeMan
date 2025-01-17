import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageCarousel from '../common/carousel'
import tw from 'twrnc'

export default function OfferCarousel() {
  return (
    <ImageCarousel 
    Carouselwidth={Dimensions.get('window').width * 0.95}
    renderItem={(index:any,) =>
        <View
        style={{
            backgroundColor: (index % 2 === 0 ? '#5B9EE1' : '#707B81'),
            marginHorizontal: 10,
            flex: 1,
            shadowColor: (index % 2 === 0 ? '#5B9EE1' : '#707B81'),
            shadowRadius: 10,
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 0 },

            justifyContent: 'center',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        }}
    >
        <Image
            source={require('@/assets/textures/dot.png')}
            style={tw`absolute inset-0 w-full h-full rounded-tl-[20px] rounded-tr-[20px] object-contains`}

        />
        <Text style={{ textAlign: 'center', fontSize: 30, color: 'white' }}>
            Offer Card {index}
        </Text>
        <View
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: 100,
                backgroundColor: 'linear-gradient(180deg, #221E1E 0%, #4B4242 100%)',
            }}
        >

        </View>
    </View> }>
        
    </ImageCarousel>
  )
}