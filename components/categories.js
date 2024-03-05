import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'; // Import Image from react-native
import React, { useState } from 'react';
import { categories } from '../constants';
// import { useState } from 'react';

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View className="nt-4">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="overFlow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15   
        }}
      >
        {categories.map((category, index) => {
            let isActive = category.id===activeCategory;
            let btnClass = isActive? ' shadow bg-gray-600' : ' bg-gray-200';
            let textClass = isActive? ' font-semibold text-gray-800' : ' text-gray-500';

        
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity 
                onPress={()=> setActiveCategory(category.id)}
                className={"p-1  shadow bg-gray-200" +btnClass}>
                <Image style={{ width: 45, height: 45 }} 
                    source={category.image} />
              </TouchableOpacity>
              <Text className={"text-sm"+textClass}>{category.Item}</Text>
            </View> 
          );
        })}
      </ScrollView>
    </View>
  );
}