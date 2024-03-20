import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../themes'
import { categories } from '../constants'
import * as Icon from "react-native-feather";
import { useRoute, useNavigation } from '@react-navigation/native';

export default function CartScreen() {
  const route = useRoute(); // Define route first
  // Assuming you want to access the subcategories of the first category
  const { categoryId } = route.params;
  const category = categories.find(cat => cat.id === categoryId);
  const navigation = useNavigation();

  if (!category) {
    // If category is not found, you can handle this case as needed
    // For example, you could display a message or navigate back
    console.warn(`Category with ID ${categoryId} not found`);
    return null; // Or return a fallback UI component
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1)}}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
      >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
      </TouchableOpacity>
      <View>
          <Text className="text-center text-xl font-bold">
              Your Cart
          </Text>
          <Text className="text-center text-xl text-gray-500">{category.Item}           
          </Text>
      </View>
    </View>
  )
}

