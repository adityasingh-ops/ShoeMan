import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'

export default function CartSummery() {
    const[show, setShow] = useState(false)
  return (
    <>
    {!show && <View style={tw` flex flex-row justify-between items-center m-10`}>
      <Text>CartSummery</Text>
      <Ionicons name="chevron-forward" size={20} color="blue" onPress={() => setShow(true)} />
    </View>}
    {show && <View style={tw` flex flex-col `}>
     <View style={tw`flex flex-row justify-between items-center mx-10 mt-6`}>
     <Text>Cart Summery</Text>
     <Ionicons name="chevron-down" size={20} color="blue" onPress={() => setShow(false)} />
        </View>
        <View style={tw`flex flex-col mb-10 mx-10 `}>
            <View style={tw`flex flex-row justify-between items-center mx-10 mt-4`}>
                <Text style={tw`font-bold`}>Total </Text>
                <Text>200</Text>
            </View>
            <View style={tw`flex flex-row justify-between items-center mx-10 mt-2`}>
                <Text style={tw`text-gray-400`}>Delivery Charge</Text>
                <Text style={tw`text-gray-400`}>0</Text>
            </View>
            <View style={tw`flex flex-row justify-between items-center mx-10 mt-2`}>
                <Text style={tw`text-gray-400`}>Platform Fee</Text>
                <Text style={tw`text-gray-400`}>5.00</Text>
            </View>
            <View style={tw`flex flex-row justify-between items-center mx-10 mt-2`}>
                <Text style={tw`text-gray-400`}>Item Total</Text>
                <Text style={tw`text-gray-400`}>195</Text>
            </View>

        </View>
    </View>}

    </>
  )
}

const styles = StyleSheet.create({})