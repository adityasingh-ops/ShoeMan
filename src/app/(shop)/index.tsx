import { Alert, Animated, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { PRODUCTS } from '@/assets/products'
import tw from 'twrnc'
import ProductListItem from '@/src/components/product-item'
import AppBar from '@/src/components/common/app-bar'
import SearchBar from '@/src/components/common/search-bar'
import OfferCarousel from '@/src/components/home/offerCaraosel'
import Categories from '@/src/components/common/categoris'
import { CATEGORIES } from '@/assets/categories'

const Home = () => {
  const scrollY = useRef(new Animated.Value(0)).current

  const layoutHeight = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  })
  const translateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  })

  return (
    <SafeAreaView style={tw`bg-[#F8F9FA] h-full`}>
      <View style={tw`mx-4 flex`}>
        <Animated.View style={[tw`mb-6 z-50`, {
          transform: [{ scaleY: layoutHeight }],
          opacity: layoutHeight
        }]}>
          <AppBar title={'Store Location'} location={'Bengaluru'}
            onCartPress={function (): void {
              Alert.alert('Cart Pressed')
            }} onMenuPress={function (): void {
           
            }} />
        </Animated.View>
        <Animated.View style={[{ transform: [{ translateY }], }]}>
          <View style={tw`mb-4`}>
            <SearchBar />
          </View>
        </Animated.View>
        <Animated.FlatList
          style={[tw`mb-20`, { transform: [{ translateY }], }]}
          data={PRODUCTS}
          renderItem={({ item }) => (
            <ProductListItem product={item} />
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={tw`justify-between mb-4`}
          ListHeaderComponent={
            <View>
              <OfferCarousel />
              <Categories categories={CATEGORIES} />
              <Text style={tw`text-xl font-bold mb-2`}>Products</Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true } // Enable native animations for better performance
          )}
          scrollEventThrottle={16} // Optimize scroll performance?
        >
        </Animated.FlatList>

      </View>
    </SafeAreaView>
  )
}

export default Home