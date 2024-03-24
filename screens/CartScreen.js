import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { themeColors } from '../themes';
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal, removeToCart, emptyCart } from '../slices/cartSlice';
// import { SafeAreaView } from 'react-native-safe-area-context';

export default function CartScreen() {
  const Market = useSelector(state => state.market.marketItems);
  const Catalog = useSelector(state => state.catalog.catalogItems);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const route = useRoute();
  const navigation = useNavigation();
  const [groupedItems, setGroupedItems] = useState({});
  const dispatch = useDispatch();
  const DeliveryFee = 200;
  const cancelOrder = ()=> {
    navigation.navigate('Home')
    dispatch(emptyCart());
  }


  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);

  const parseImageString = (imageString) => {
    if (!imageString) return ''; // Return empty string if imageString is falsy
  
    // Replace double quotes with single quotes
    return imageString.replace(/"/g, "'");
  };
  // Extracting cartItems from route.params with default value as an empty array
  // const { cartItems = [] } = route.params || {};

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
                <TouchableOpacity
                onPress={cancelOrder}>
                  <Text className="font-bold"
                        style={{color: 'red'}}
                        >Cancel Order </Text>
                </TouchableOpacity>
            </View>
              {/* Your UI components to display cart items */}
              <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ padding: 50 }}
                className="bg-white pt-5"
              >
                  {Object.entries(groupedItems).map(([key, items]) => {
                  // Assuming each group contains multiple items, iterate over them
                  return items.map((item, index) => (
                    <View key={index} style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, backgroundColor: 'white', marginHorizontal: 10, marginBottom: 10, borderRadius: 20, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 5 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                        <Text style={{ fontWeight: 'bold', color: themeColors.text }}>{items.length}x</Text>
                        <Text style={{ fontWeight: 'bold', color: themeColors.text, marginLeft: 10, flex: 1, textAlign: 'center' }}>{item.Item}</Text>
                      </View>
                      <TouchableOpacity onPress={() => dispatch(removeToCart({key, item}))} style={{ backgroundColor: themeColors.bgColor(1), borderRadius: 20, padding: 8, marginLeft: 10 }}>
                        <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                      </TouchableOpacity>
                    </View>
                    ));
                  })}
              </ScrollView>
              <View className="p-6 px-8 rounded-full"
              style={{backgroundColor: themeColors.bgColor(0.2)}}>
                <View className="flex-row justify-between">
                  <Text className="text-gray-700">Subtotal</Text>
                  <Text className="text-gray-700">{cartTotal} ksh</Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className="text-gray-700">Delivery Fee</Text>
                  <Text className="text-gray-700">{DeliveryFee} ksh</Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className="text-gray-700font-extrabold">Total</Text>
                  <Text className="text-gray-700 font-extrabold">{cartTotal + DeliveryFee}ksh</Text>
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







