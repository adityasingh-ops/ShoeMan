import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { EvilIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import tw from 'twrnc'
import { AppBarProps } from '@/assets/types/appBar'

export default function AppBar({ title, location, onCartPress, onMenuPress }: AppBarProps) {
  return (
    <View style={tw`flex-row justify-between items-center `}>
      <TouchableOpacity
        onPress={onMenuPress}
        style={tw`bg-white p-2 items-center rounded-full shadow-sm`}>
        <MaterialCommunityIcons name='dots-grid' size={24} />
      </TouchableOpacity>
      <View style={tw`flex-1 items-center`}>
        <Text style={tw`text-gray-500 items-center`}>{title}</Text>
        <View style={tw`flex-row items-center p-1`}>
          <EvilIcons name="location" size={24} color="red" />
          <Text>{location}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={onCartPress}
        style={tw`bg-white p-2 items-center rounded-full shadow-sm`}>
        <Ionicons
          name="bag-handle-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}