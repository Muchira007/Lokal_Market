import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../themes'
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart, selectCartItemsById } from '../slices/cartSlice';

export default function ItemRow({ subcategories }) {
    const dispatch = useDispatch();
    const totalItems = useSelector(state => selectCartItemsById(state, subcategories.id)); // Pass subcategories.id
    const item = subcategories; // Add this line to make 'item' available

    const handleDecrease = () => {
        dispatch(removeToCart({ id: item.id }));
    }

    const handleIncrease = () => {
        dispatch(addToCart({ ...item }));
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 12, borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5, marginBottom: 10, marginLeft: 4, marginRight: 4 }}>
            <Image
                style={{ height: 100, width: 100, marginRight: 12, borderRadius: 20 }}
                source={subcategories.image}
            />
            <View style={{ flex: 1 }}>
                <View style={{ paddingTop: 12 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 4 }}>{subcategories.Item}</Text>
                    <Text style={{ color: 'gray', marginBottom: 4 }}>{subcategories.description}</Text>
                    <Text style={{ fontSize: 20, marginBottom: 8 }}>{subcategories.price} ksh</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ paddingHorizontal: 12 }}>Add to Cart</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                onPress={handleDecrease} // Fix handleDecrease call
                                style={{ backgroundColor: themeColors.bgColor(1), borderRadius: 100, padding: 8, marginRight: 8 }}
                            >
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke={"white"}/>
                            </TouchableOpacity>
                            <Text className="px-3">
                                {totalItems.length}
                            </Text>
                            <TouchableOpacity
                                onPress={handleIncrease} // Fix handleIncrease call
                                style={{ backgroundColor: themeColors.bgColor(1), borderRadius: 100, padding: 8 }}
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



