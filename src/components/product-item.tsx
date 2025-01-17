import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Product } from '@/assets/types/product'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'

export default function ProductListItem({ product }: { product: Product }) {
  return (
    <View style={tw`w-48%  rounded-xl shadow-md bg-white`}>
      <Image source={product.heroImage} style={tw`w-full h-40 shadow-lg  rounded-xl`} />
      <View style={tw`mt-[-40px] mx-4 py-2 `}>
        <Text style={tw`text-[#5B9EE1] `}>Best Seller</Text>
        <Text style={tw`text-lg font-semibold pb-2`}>{product.title}</Text>
        <Text style={tw`text-sm  font-semibold pb-5`}>Rs {product.price}</Text>
      </View>
      <TouchableOpacity style={tw`bg-[#5B9EE1] absolute bottom-0 h-8 w-8 self-end p-1 rounded-br-xl rounded-tl-xl`}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})