import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, StatusBar } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { themeColors } from '../themes';
import CartIcon from '../components/CartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { setMarketItems } from '../slices/marketSlice';
import { addToCart, removeToCart, selectCartItemsById } from '../slices/cartSlice';

export default function Market() {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { specialItem, categoryId } = route.params ?? {};
  const totalItems = useSelector(state => selectCartItemsById(state, specialItem.id));
  const [quantity, setQuantity] = useState(0); // Change the initial value to 0

  const handleQuantityChange = (text) => {
    if (/^\d*$/.test(text)) {
      setQuantity(parseInt(text));
    }
  };

  useEffect(() =>{
    if(specialItem && specialItem.id){
      dispatch(setMarketItems(specialItem));
    }
  },[specialItem, dispatch]);

  const handleAddToCart = () => {
    if (specialItem && specialItem.id) {
      dispatch(addToCart({ ...specialItem, quantity }));
    }
  };

  const handleRemoveFromCart = () => {
    if (specialItem && specialItem.id) {
      dispatch(removeToCart({ id: specialItem.id }));
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => {
        const newQuantity = prevQuantity - 1;
        handleRemoveFromCart(); // Call remove from cart when decreasing quantity
        return newQuantity;
      });
    }
  };
  

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    handleAddToCart();
  };

  const totalPrice = specialItem ? specialItem.price * quantity : 0
  return (
    <View style={{ flex: 1 }}>
      <CartIcon categoryId={categoryId} specialItem={specialItem} />
      <StatusBar style="light"/>
      <ScrollView>
        <View style={{ position: 'relative', height: 300 }}>
          {specialItem && specialItem.image && (
            <Image style={{ width: '100%', height: '100%' }} source={specialItem.image} />
          )}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ position: 'absolute', top: 40, left: 20 }}
          >
            <Icon.ArrowLeft style={{ backgroundColor: 'white', borderRadius: 20 }} strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
          <View style={{ position: 'absolute', bottom: 20, left: 20 }}>
            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{specialItem?.Item}</Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: 'white', padding: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 12 }}>
              <Text style={{ color: 'green' }}>{specialItem?.stars}</Text>
              {' '}
              <Text>({specialItem?.reviews} review)</Text>
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: 'gray', fontSize: 12, marginLeft: 5 }}>Rongai</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: 'black', fontSize: 18 }}>{specialItem?.description}</Text>
          </View>
        </View>
        <View style={{ paddingBottom: 36, backgroundColor: 'white', paddingHorizontal: 20 }}>
          <Text style={{ color: 'black', fontSize: 18 }}>Ingredients</Text>
          {specialItem?.ingredients && (
            <View style={{ marginLeft: 10, paddingTop: 10 }}>
              {specialItem.ingredients.split('\n').map((ingredient, index) => (
                <Text key={index} style={{ color: 'black', fontSize: 16 }}>{`${index + 1}. ${ingredient}`}</Text>
              ))}
            </View>
          )}
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text style={{ fontSize: 16 }}>Quantity:</Text>
          <TextInput
            style={{ marginLeft: 10, padding: 5, borderWidth: 1, borderColor: 'gray', borderRadius: 5, width: 80 }}
            keyboardType="numeric"
            value={quantity.toString()}
            onChangeText={handleQuantityChange}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
                onPress={handleIncrease}
                style={{ backgroundColor: themeColors.bgColor(1), borderRadius: 20, padding: 8, marginLeft: 10 }}
              >
                <Icon.PlusSquare strokeWidth={2} height={20} width={20} stroke={"white"} />
              </TouchableOpacity>
              <TouchableOpacity
  onPress={() => {
    console.log("Before decrement: Quantity:", quantity);
    handleDecrease();
    console.log("After decrement: Quantity:", quantity);
  }}
  disabled={!totalItems.length}
  style={{
    backgroundColor: themeColors.bgColor(1),
    borderRadius: 20,
    padding: 8,
    marginLeft: 10,
  }}
>
  <Icon.MinusSquare strokeWidth={2} height={20} width={20} stroke={"white"} />
</TouchableOpacity>

              
          </View>
        </View>
        <View style={{ backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 10, borderTopWidth: 1, borderTopColor: 'gray', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16 }}>Total Price: {totalPrice} ksh</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={handleAddToCart}
              style={{ backgroundColor: themeColors.bgColor(1), borderRadius: 20, padding: 8, marginLeft: 10 }}
            >
              <Icon.Plus strokeWidth={2} height={20} width={20} stroke={"white"} />
            </TouchableOpacity>
            <Text style={{marginLeft: 10}}>Add To Cart: {totalItems.length}</Text>
            <TouchableOpacity
              onPress={handleRemoveFromCart}
              style={{ backgroundColor: themeColors.bgColor(1), borderRadius: 20, padding: 8, marginLeft: 10 }}
            >
              <Icon.Minus strokeWidth={2} height={20} width={20} stroke={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

