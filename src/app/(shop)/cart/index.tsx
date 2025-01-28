import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export default function index() {
  return (
    <SafeAreaView style={tw`bg-[#F8F9FA] h-full`}>
      <Text style={tw`text-2xl mb-6 text-center font-semibold`}>Your ❤️ Cart</Text>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => (
          <View style={tw`bg-white p-4 mb-4 mx-4 rounded-lg shadow-lg`}>

            <Text>Cart Item {item}</Text>
          </View>
        )}
        keyExtractor={item => item.toString()}
      // ListHeaderComponent={header}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})