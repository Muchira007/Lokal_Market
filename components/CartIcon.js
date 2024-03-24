import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { themeColors } from '../themes';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../slices/cartSlice';

export default function CartIcon({ categoryId, specialItem }) {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  if (!cartItems.length) return
  

  const handlePress = () => {
    // Determine which parameter to pass based on the scenario
    if (categoryId) {
      navigation.navigate('CartScreen', { categoryId });
    } else if (specialItem && specialItem.id) {
      navigation.navigate('CartScreen', { specialId: specialItem.id });
    } else {
      console.error('Invalid scenario for navigating to CartScreen');
    }
  };

  console.log('Special item:', specialItem); // Add this line for logging

  return (
    <View style={{ position: 'absolute', bottom: 5, width: '100%', zIndex: 50 }}>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 5,
          borderRadius: 30,
          padding: 10,
          backgroundColor: themeColors.bgColor(1),
          boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)'
        }}>
        <View style={{ backgroundColor: 'rgba(255,255,255, 0.4)', borderRadius: 999, padding: 8, marginRight: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>{cartItems.length}</Text>
        </View>
        <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 18, color: 'white' }}>View Cart</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>{cartTotal} ksh</Text>
      </TouchableOpacity>
    </View>
  );
}







