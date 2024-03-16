import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { themeColors } from '../themes';

export default function Market() {
  const route = useRoute();
  const navigation = useNavigation();

  // Extract specialItem from route params
  const { specialItem } = route.params;

  // State for quantity input
  const [quantity, setQuantity] = useState('1');

  // Function to handle quantity change
  const handleQuantityChange = (text) => {
    // Validate input to ensure it's a positive integer
    if (/^\d*$/.test(text)) {
      setQuantity(text);
    }
  };

  // Function to calculate total price
  const totalPrice = specialItem.price * parseInt(quantity);

  return (
    <ScrollView>
      <View style={{ position: 'relative' }}>
        {/* Display image if specialItem.image is defined */}
        {specialItem.image && (
          <Image style={{ width: '100%', height: 200 }} source={specialItem.image} />
        )}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', top: 40, left: 20 }}
        >
          <Icon.ArrowLeft style={{ backgroundColor: 'white', borderRadius: 20 }} strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{specialItem.Item}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: 'white', padding: 20, borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Image source={require('../assets/fullstar.png')} style={{ height: 16, width: 16, marginRight: 4 }} />
          <Text style={{ fontSize: 12 }}>
            <Text style={{ color: 'green' }}>{specialItem.stars}</Text>
            {' '}
            <Text>({specialItem.reviews} review)</Text>
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Icon.MapPin color="gray" width={15} height={15} />
          <Text style={{ color: 'gray', fontSize: 12, marginLeft: 5 }}>Rongai</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Text style={{ color: 'black', fontSize: 18, marginLeft: 5 }}>{specialItem.description}</Text>
        </View>
      </View>
      <View style={{ paddingBottom: 36, backgroundColor: 'white' }}>
        <Text style={{ color: 'black', fontSize: 18, marginLeft: 5 }}>Ingredients</Text>
        {specialItem.ingredients && (
          <View style={{ marginLeft: 10, paddingTop: 10 }}>
            {specialItem.ingredients.split('\n').map((ingredient, index) => (
              <Text key={index} style={{ color: 'black', fontSize: 16, marginLeft: 5 }}>
                {`${index + 1}. ${ingredient}`}
              </Text>
            ))}
          </View>
        )}
      </View>
      {/* Quantity input */}
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor:'white' }}>
        <Text style={{ fontSize: 16 }}>Quantity:</Text>
        <TextInput
          style={{ marginLeft: 10, padding: 5, borderWidth: 1, borderColor: 'gray', borderRadius: 5, width: 50 }}
          keyboardType="numeric"
          value={quantity.toString()}
          onChangeText={handleQuantityChange}
        />
      </View>
      {/* Total price */}
      <View style={{ marginLeft: 10,  backgroundColor:'white'}}>
        <Text style={{ fontSize: 16,fontWeight: 'bold' }}>Total Price: {totalPrice} ksh</Text>
      </View>
    </ScrollView>
  );
}

