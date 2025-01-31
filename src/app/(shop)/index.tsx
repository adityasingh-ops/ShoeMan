import { Alert, Animated, FlatList, RefreshControl, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { PRODUCTS } from '@/assets/products'
import tw from 'twrnc'
import ProductListItem from '@/src/components/product-item'
import AppBar from '@/src/components/common/app-bar'
import SearchBar from '@/src/components/common/search-bar'
import OfferCarousel from '@/src/components/home/offerCaraosel'
import Categories from '@/src/components/common/categoris'
import { CATEGORIES } from '@/assets/categories'

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // Simulate a network request or data fetch
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };
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
    <SafeAreaView style={tw`bg-[#F8F9FA] flex-1`}>
      <View style={tw`mx-4 flex`}>
        <Animated.View style={[tw`mb-6 z-50`, {
          transform: [{ scaleY: layoutHeight }],
          opacity: layoutHeight
        }]}>
          <AppBar title={'Store Location'} location={'Bengaluru'}
            onCartPress={function (): void {
            }} onMenuPress={function (): void {
            }} />
        </Animated.View>
        <Animated.View style={[{ transform: [{ translateY }], }]}>
          <View style={tw`mb-4`}>
            <SearchBar />
          </View>
        </Animated.View>
        <Animated.FlatList
          style={[tw`pb-60`, { transform: [{ translateY }], }]}
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
          ListFooterComponent={() => (
            <View style={tw`pb-20`}>
              <Text style={tw`text-center text-gray-500  text-md`}>Made with ❤️ @Aditya Singh</Text>
            </View>
          )}
          ListFooterComponentStyle={tw`mb-30 mt-10`}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true } // Enable native animations for better performance
          )}
          scrollEventThrottle={16} // Optimize scroll performance?
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressBackgroundColor={'#F8F9FA'}
              colors={['#5B9EE1']}
              tintColor={'#5B9EE1'}

            />
          }
        >
        </Animated.FlatList>

      </View>
    </SafeAreaView>
  )
}

export default Home