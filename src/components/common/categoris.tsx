import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { category } from '@/assets/types/category';

interface CategoriesProps {
  categories: category[];
}

export default function Categories({ categories }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<category | null>(null);

  const handleClickedCategory = (category: category) => {
    setSelectedCategory(selectedCategory?.id === category.id ? null : category);
  };

  return (
    <View style={[tw` pb-6`]}>
      <View style={tw`flex-row  justify-between`}>
        {categories.map((category) => {
          const isSelected = selectedCategory?.id === category.id;

          return (
            <TouchableOpacity
              key={category.id}
              onPress={() => handleClickedCategory(category)}
              activeOpacity={0.8}
              style={[
                tw`items-center flex-row justify-center rounded-full shadow-lg p-2 mx-2 mb-2`,
                isSelected ? tw`bg-[#5B9EE1] w-36 h-12 justify-start` : tw`bg-white w-12  h-12`,
              ]}
            >
              <Image
                source={category.imageUrl}
                style={tw`w-8 h-8 bg-white rounded-full`}
                resizeMode="contain"
              />
              {isSelected && (
                <Text
                  style={tw`ml-2 text-sm font-semibold text-white`}
                  numberOfLines={1}
                >
                  {category.name}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}