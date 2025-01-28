import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { cartProduct } from '@/assets/types/cart'

export default function CartCard({ product }: { product: cartProduct }) {
  return (
    <View>
      <Text>{product.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})