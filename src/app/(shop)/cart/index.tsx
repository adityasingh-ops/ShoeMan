import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { CARTPRODUCTS } from '@/assets/cart'
import React from 'react'
import tw from 'twrnc'
import CartCard from '@/src/components/cart/card'

export default function index() {
  return (
    <SafeAreaView style={tw`bg-[#F8F9FA] h-full`}>
      <Text style={tw`text-2xl mb-6 text-center font-semibold`}>Your ❤️ Cart</Text>
      <FlatList
        data={CARTPRODUCTS}
        renderItem={({ item }) => (

          <CartCard product={item} />

        )}
        keyExtractor={item => item.toString()}
      // ListHeaderComponent={header}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})