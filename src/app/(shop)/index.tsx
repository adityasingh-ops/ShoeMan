import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PRODUCTS } from '@/assets/products'
import tw from 'twrnc'
import ProductListItem from '@/src/components/product-item'
import AppBar from '@/src/components/common/app-bar'
import SearchBar from '@/src/components/common/search-bar'
import ImageCarousel from '@/src/components/common/carousel'
import OfferCarousel from '@/src/components/home/offerCaraosel'

const Home = () => {
  return (
    <SafeAreaView style={tw`bg-[#F8F9FA] h-full`}>
      <View style={tw`mx-4 flex`}>
        <AppBar title={'Store Location'} location={'Bengaluru'}
          onCartPress={function (): void {
            Alert.alert('Cart Pressed')
          }} onMenuPress={function (): void {
            Alert.alert('Menu Pressed')
          }} />
        <View style={tw`mt-6 mb-4`}>
          <SearchBar/>
        </View>
        <OfferCarousel/>
        <FlatList
          data={PRODUCTS}
          renderItem={({ item }) => (
            <ProductListItem product={item} />
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={tw`justify-between mb-4`}
          ListHeaderComponent={<Text style={tw`text-xl font-bold mb-2`}>Products</Text>}
          showsVerticalScrollIndicator={false}
        >
        </FlatList>

      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})