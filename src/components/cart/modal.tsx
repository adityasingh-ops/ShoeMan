import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { cartProduct } from '@/assets/types/cart'
import { FlatList } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

export default function CartModal({ cartProduct }: { cartProduct: cartProduct }) {
  return (
    <View style={tw`flex flex-row p-4 `}>
        <Image
        source={cartProduct.heroImage}
        style={tw`w-16 h-16 rounded-[30px] shadow-lg bg-blue-100`}
        />
        <View style={tw`flex flex-col ml-4 mt-2`}>
            <Text style={tw`text-md font-semibold`}>{cartProduct.title}</Text>
            <Text style={tw`text-md`}>{cartProduct.price}</Text>
        </View>
        <Ionicons name="trash" size={24}  style={tw`absolute top-6 right-4 text-[#5B9EE1]`} />
    </View>
  )
}

const styles = StyleSheet.create({})