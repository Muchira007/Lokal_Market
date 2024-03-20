import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../themes';
import * as Icon from  'react-native-feather';
import { View, Text, Image } from 'react-native'

export default function SpecialCard({ specialItem }) {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to the 'Market' screen and pass specialItem as params
    navigation.navigate('Lokal Market', { specialItem });
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      {/* <View style={{ marginRight: 6, backgroundColor: 'white', borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}> */}
        <View
        style={{
                shadowColor: themeColors.bgColor(1),
                shadowRadiues: 15,
        }}
         className= "mr-6 bg-white rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={specialItem.image} />
        {/* <View style={{ paddingHorizontal: 5, paddingBottom: 4, marginTop: 2 }}> */}
        <View className="px-3 pb-4 space-y-2">
          <Text style={{ fontSize: 20, fontWeight: 'bold',paddingTop: 2 }}>{specialItem.Item}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
            <Image source={require('../assets/fullstar.png')} style={{ height: 16, width: 16, marginRight: 4 }} />
            <Text style={{ fontSize: 12 }}>
              <Text style={{ color: 'green' }}>{specialItem.stars}</Text> 
              {' '}
              <Text>({specialItem.reviews} reviews)</Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-l">
            <Icon.MapPin color="gray" width="15" height="15" />
            <Text className="text-gray-800 text-xs">  Rongai</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}