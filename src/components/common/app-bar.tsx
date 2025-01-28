import { Text, View, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { EvilIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import tw from 'twrnc'
import { AppBarProps } from '@/assets/types/appBar'

export default function AppBar({ title, location, onCartPress, onMenuPress }: AppBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rotateAnimation = useRef(new Animated.Value(0)).current;
  const menuScaleY = useRef(new Animated.Value(0)).current;

  const menuItems = [
    { id: 1, title: 'Profile', icon: 'person-outline' },
    { id: 2, title: 'Orders', icon: 'receipt-outline' },
    { id: 3, title: 'Settings', icon: 'settings-outline' },
    { id: 4, title: 'Help', icon: 'help-circle-outline' },
  ];

  const onPressMenu = () => {
    const toValue = isMenuOpen ? 0 : 1;
    
    Animated.parallel([
      Animated.spring(rotateAnimation, {
        toValue,
        useNativeDriver: true,
        tension: 20,
        friction: 5
      }),
      Animated.spring(menuScaleY, {
        toValue,
        useNativeDriver: true,
        tension: 20,
        friction: 7
      })
    ]).start();

    setIsMenuOpen(!isMenuOpen);
    if (onMenuPress) onMenuPress();
  };

  const rotate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  const scale = menuScaleY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });

  return (
    <View>
      <View style={tw`flex-row justify-between items-center`}>
        <View style={tw`relative`}>
          <TouchableOpacity
            onPress={onPressMenu}
            style={tw`bg-white p-2 items-center rounded-full shadow-sm`}>
            <Animated.View style={{ transform: [{ rotate }] }}>
              {isMenuOpen ? (<MaterialCommunityIcons name='chevron-down' size={24} />):(<MaterialCommunityIcons name='dots-grid' size={24} />)}
            </Animated.View>
          </TouchableOpacity>

          {/* Expandable Menu */}
          <Animated.View style={[
            tw`absolute top-14 left-0 bg-white rounded-xl shadow-xl  w-48`,
            {
              zIndex: 100,
              transform: [{ scaleY: scale }],
              opacity: scale,
              transformOrigin: 'top'
            }
          ]}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={tw`flex-row items-center p-4 border-b border-gray-100`}
                onPress={() => {
                  console.log(`Selected: ${item.title}`);
                  onPressMenu();
                }}
              >
                <Ionicons name={item.icon as any} size={20} style={tw`mr-3 text-[#5B9EE1]`} />
                <Text style={tw`text-base`}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </View>

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
            name="bag-handle-outline" 
            size={24} 
            color="black" 
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}