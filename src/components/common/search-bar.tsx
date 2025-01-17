import React, { useState, useRef } from 'react';
import {TextInput, View, Animated } from 'react-native';
import tw from 'twrnc';
import { EvilIcons } from '@expo/vector-icons';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    // Animated value for icon opacity/scale
    const iconOpacity = useRef(new Animated.Value(1)).current;

    const handleFocus = () => {
        setIsFocused(true);
        Animated.timing(iconOpacity, {
            toValue: 0, // Hide the icon
            duration: 500, // Duration in milliseconds
            useNativeDriver: true,
        }).start();
    };

    const handleBlur = () => {
        setIsFocused(false);
        Animated.timing(iconOpacity, {
            toValue: 1, // Show the icon
            duration: 500, // Duration in milliseconds
            useNativeDriver: true,
        }).start();
    };

    const handleSearch = (text: string) => {
        setQuery(text);
    };

    return (
        <View style={tw`flex-row bg-white px-4 shadow-lg mx-6 py-3 rounded-full`}>
            {/* Animated Icon */}
            <TextInput
                style={tw`flex-1 ml-2`}
                placeholder="Search for shoes"
                value={query}
                onFocus={handleFocus} // Trigger animation on focus
                onBlur={handleBlur} // Trigger animation on blur
                onChangeText={handleSearch}
            />
            <Animated.View style={[{ opacity: iconOpacity }]}>
                <EvilIcons name="search" size={24} color="gray" />
            </Animated.View>
        </View>
    );
}
