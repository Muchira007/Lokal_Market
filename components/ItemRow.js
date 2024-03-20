import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../themes'
import * as Icon from "react-native-feather";

export default function ItemRow({ subcategories }) {
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
        {/* Image */}
        <Image className="rounded-3xl mr-3" 
                style={{height: 100, width: 100, paddingHorizontal: 4}}
                source={subcategories.image}/>
        
        {/* Details */}
        <View className="flex flex-1 space-y-3">
            <View className="pt-3">
                <Text className="text-xl font-bold text-black mb-1">{subcategories.Item}</Text>
                <Text className="text-gray-700 mb-1">{subcategories.description}</Text>
                <Text className="text-xl mb-2">{subcategories.price} ksh</Text>
                
                {/* Add to Cart */}
                <View className="flex-row items-center justify-between">
                    <Text className="px-3 mb-1">Add to Cart</Text>
                    {/* Buttons */}
                    <View className="flex-row">
                        <TouchableOpacity
                            className="p-1 rounded-full"
                            style={{backgroundColor: themeColors.bgColor(1)}}
                        >
                            <Icon.Minus strokeWidth={2} height={20} width={20} stroke={"white"}/>
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                            className="p-1 rounded-full"
                            style={{backgroundColor: themeColors.bgColor(1)}}
                        >
                            <Icon.Plus strokeWidth={2} height={20} width={20} stroke={"white"}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}

