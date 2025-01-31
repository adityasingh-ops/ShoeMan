import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { cartProduct } from '@/assets/types/cart'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';
import PaymentSlider from '../ui/slider';

export default function CartCard({ product }: { product: cartProduct }) {
  const [count, setCount] = useState(1);

  return (
    <View
      key={product.id}
      style={tw`flex-row items-start   p-4 rounded-lg shadow`}
    >
      <View style={tw`flex-row `}>
        <View>
          <Image
            source={product.heroImage}
            style={tw`w-30 h-30 rounded-[30px] shadow-lg bg-blue-100`}
            resizeMode="contain"
          />
          <View style={tw`absolute bottom-2 left-[15%] bg-white rounded-lg py-1 px-2`}>
            <View style={tw`absolute top-0 left-0 right-0 bottom-0 bg-blue-100 opacity-20 rounded-lg`} />
            <View style={tw`flex-row justify-between gap-4 items-center`}>
              <Ionicons name="remove" size={14} color="black" onPress={() => setCount(Math.max(count - 1, 1))} />
              <Text>{count}</Text>
              <Ionicons name="add" size={14} color="black" onPress={() => setCount(Math.min(count + 1, product.maxQuantity))} />
            </View>
          </View>
        </View>
        <View>
          <Text
            style={tw`text-lg font-semibold ml-4 mt-4`}
          >{product.title}</Text>
          <Text
            style={tw`text-md ml-4 mt-1`}
          >{product.price}</Text>
        </View>

      </View>
      
    </View>
    
  )
}

const styles = StyleSheet.create({})