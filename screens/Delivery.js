import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../themes';
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart } from '../slices/cartSlice';

export default function Delivery() {
  const subcategories = useSelector(state=> state.catalog.subcategories)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cancelOrder = ()=> {
    navigation.navigate('Home')
    dispatch(emptyCart());
  }

  
  // Define initial region
  const initialRegion = {
    latitude: -1.2488065,
    longitude: 36.8711299,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={initialRegion}
        style={{ flex: 1 }}
        mapType='standard'
      >
        <Marker
          coordinate={{
            latitude: initialRegion.latitude,
            longitude: initialRegion.longitude,
          }}
          title="Lokal Market"
          description="Welcome to Lokal Market!."
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className="-mt-12  relative"
      style={{borderRadius: 60, backgroundColor: 'rgba(255,255,255,0.7)'}}>
        <View className=" flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl text-gray-700 font-semibold">
              20-30 minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your Order is on its way
            </Text>
          </View>
          <Image className="w-24 h-24" source={require('../assets/delivery-man.webp')}></Image>
        </View>
        <View
        style={{backgroundColor: themeColors.bgColor(0.8)}}
        className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
          <View className="p-1 rounded-full"
          style={{backgroundColor: 'rgba(255,255,255,0.4)'}}>
           <Image className="w-16 h-16 rounded-full" source={require('../assets/BIRTHDAY _15.jpg')}></Image> 
        </View>
        <View className="flex-1 ml-3">
          <Text className="text-lg font-bold text-white">
            James Wafoola
          </Text>
          <Text className="text-lg font-bold text-white">
            Your Rider
          </Text>
        </View>
        <View className="flex-row items-center space-x-3 mr-3">
          <TouchableOpacity className="bg-white pd-2 rounded-full">
            <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={cancelOrder} className="bg-white pd-2 rounded-full">
            <Icon.X  stroke={'red'} strokeWidth={4}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>
  );
}
