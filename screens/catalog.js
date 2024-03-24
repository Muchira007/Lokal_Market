import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, StatusBar } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import * as Icon from "react-native-feather";
import { themeColors } from '../themes';
import ItemRow from '../components/ItemRow';
import CartIcon from '../components/CartIcon';
import { selectCatalogItems, setCatalogItems } from '../slices/catalogSliceTemp';
import { categories } from '../constants'; // Import categories

export default function Catalog() {
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const catalogItems = useSelector(selectCatalogItems);

    const { categoryId, specials } = route.params || {};
    const [error, setError] = useState(false);

    useEffect(() => {
        // Set the catalog items when the component mounts
        dispatch(setCatalogItems(categories));
    }, [dispatch]);

    let category;

    // Determine which data to use based on the scenario
    if (categoryId) {
        category = catalogItems.find(cat => cat.id === categoryId);
    } else if (specials) {
        // Handle logic related to specials data
    }

    useEffect(() => {
        if (!category) {
            setError(true);
        }
    }, [category]);

    if (error) {
        // If category is not found, display an error message or navigate back
        console.warn(`Category with ID ${categoryId} not found`);
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 18 }}>Category not found</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
                    <Text style={{ color: 'blue' }}>Go back</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (!category) {
        // If category is still loading, you can display a loading indicator here
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View>
            <CartIcon categoryId={categoryId} specials={specials} />
            <StatusBar style="light"/>
            <ScrollView>
                <View style={{ position: 'relative' }}>
                    <Image style={{ width: '100%', height: 300 }} source={category.image} />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ position: 'absolute', top: 40, left: 20 }}
                    >
                        <Icon.ArrowLeft style={{ backgroundColor: 'white', borderRadius: 20 }} strokeWidth={3} stroke={themeColors.bgColor(1)} />
                    </TouchableOpacity>
                    <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
                            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{category.Item}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: 20, borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Catalog</Text>
                    {
                        category.subcategories.map((subcategory, index) => (
                            <ItemRow key={index} subcategories={subcategory} />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    );
}
















