import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OrderPreparing() {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to the desired screen after 3000 milliseconds
      navigation.navigate('Delivery');
    }, 3000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../assets/motorbike-motorbikes.gif')} 
      className="h-80 w-80 rounded-full" />
    </View>
  );
}
