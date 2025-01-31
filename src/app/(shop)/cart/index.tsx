import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { CARTPRODUCTS } from '@/assets/cart'
import React from 'react'
import tw from 'twrnc'
import CartCard from '@/src/components/cart/card'
import SwipeToPay from '@/src/components/ui/slider'
import CallInterface from '@/src/components/ui/slider'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Cart from '../../cart'
import CartSummery from '@/src/components/cart/order-summary'

export default function index() {
  return (
    <SafeAreaView style={tw` `}>

      <Text style={tw`text-2xl mb-6 text-center font-semibold`}>Your ❤️ Cart</Text>
      <GestureHandlerRootView style={{ flex: 1 }}>

      </GestureHandlerRootView>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={CARTPRODUCTS}
        renderItem={({ item }) => (
          <CartCard product={item} />

        )}
        ListFooterComponentStyle={tw`mb-40`}
        ListFooterComponent={({item}) => (
          <View>
            <CartSummery />
            <CallInterface
              onAnswer={() => Alert.alert('Further tomarrow day 27 !🤪')}
              price= {200}
            />
          </View>
        )



        }
        keyExtractor={item => item.id.toString()}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})