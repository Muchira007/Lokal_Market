import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { themeColors } from '../themes';
// import { categories } from '../constants';
import * as Icon from "react-native-feather";
// import { SafeAreaView } from 'react-native-safe-area-context';

export default function CartScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  // Extracting cartItems from route.params with default value as an empty array
  const { cartItems = [] } = route.params || {};

  // Check if cartItems exist
  if (!cartItems || !Array.isArray(cartItems)) {
    console.warn('No cartItems found in route params');
    return null; // Or return a fallback UI component
  }

  // Your logic to display cart items

  return (
      <View className="bg-white flex-1"
          style={{paddingTop:40}}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: themeColors.bgColor(1)}}
            className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
            >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
            </TouchableOpacity>
            <StatusBar style="light" />
            <View style={{paddingBottom:10}}>
                <Text className="text-xl font-bold text-center"> Your Cart</Text>
            </View>

            <View style={{backgroundColor:themeColors.bgColor(0.2)}}
              className="flex-row px-4 items-center">
                <Image source={require('../assets/delivery-man.webp')}
                className="w-20 h-20 rounded-full"/>
                <Text className="flex-1 pl-4">Delivery in 20-30 minutes</Text>
                <TouchableOpacity>
                  <Text className="font-bold"
                        style={{color:themeColors.text}}
                        >Change </Text>
                </TouchableOpacity>
            </View>
              {/* Your UI components to display cart items */}
              <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ padding: 50 }}
                className="bg-white pt-5"
              >
                {cartItems.map((item, index) => (
                  <View key={index} className="fllex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
                    <Text className="font-bold" style={{ color: themeColors.text }}>2x</Text>
                    <Image className="h-14 w-14 rounded-full" source={{ uri: item.Image }} />
                    <Text className="font-bold" style={{ color: themeColors.text }}>{item.Item}</Text>
                  </View>
                ))}
              </ScrollView>
              <View className="p-6 px-8 rounded-full"
              style={{backgroundColor: themeColors.bgColor(0.2)}}>
                <View className="flex-row justify-between">
                  <Text className="text-gray-700">Subtotal</Text>
                  <Text className="text-gray-700">2000 ksh</Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className="text-gray-700">Delivery Fee</Text>
                  <Text className="text-gray-700">200 ksh</Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className="text-gray-700font-extrabold">Total</Text>
                  <Text className="text-gray-700 font-extrabold">2200 ksh</Text>
                </View>
              
                <TouchableOpacity
                onPress={()=>{navigation.navigate("OrderPreparing")}}
                  style={{backgroundColor: themeColors.bgColor(1)}}
                  className="p-3 rounded-full">
                    <Text className="text-gray-700font-extrabold text-lg">Place Order</Text>
                </TouchableOpacity>
              </View>
    </View>
    </View>
  );
}







