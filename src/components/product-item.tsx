import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Product } from '@/assets/types/product'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'

export default function ProductListItem({ product }: { product: Product }) {
  const [cart, setCart] = useState(0);
  const [total, setTotal] = useState(0);
  const addCart = () => {
    setCart(prev => prev + 1);
    setTotal(prev => prev + product.price);
  };

  const removeCart = () => {
    if (cart > 0) {
      setCart(prev => prev - 1);
      setTotal(prev => prev - product.price);
    }
  };
  return (
    <View style={tw`w-48%  rounded-xl shadow-md bg-white`}>
      <Image source={product.heroImage} style={tw`w-full h-40 shadow-lg  rounded-xl`} />
      <View style={tw`mt-[-40px] mx-4 py-2 `}>
        <Text style={tw`text-[#5B9EE1] `}>Best Seller</Text>
        <Text style={tw`text-lg font-semibold pb-2`}>{product.title}</Text>
        <Text style={tw`text-sm  font-semibold pb-5`}>Rs {product.price}</Text>
      </View>
      {cart > 0 ? (
          <View style={tw`bg-[#5B9EE5] absolute bottom-0 h-8 self-end p-1 rounded-br-xl rounded-tl-xl`}>
            <View style={tw`flex-row items-center`}>
            <TouchableOpacity onPress={removeCart} >
              <Ionicons name="remove" size={24} color="white" />
            </TouchableOpacity>
            <Text style={tw`mx-4 text-sm text-white font-semibold`}>{cart}</Text>
            <TouchableOpacity onPress={addCart} >
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
            </View>
          </View>
        ) : (
        <TouchableOpacity 
          onPress={addCart}
        style={tw`bg-[#5B9EE5] absolute bottom-0 h-8 self-end p-1 rounded-br-xl rounded-tl-xl`}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      )}

    </View>
  )
}

const styles = StyleSheet.create({})