import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
//import { themeColors } from '../themes'
import SpecialCard from './SpecialCard'
import { featured, specials } from '../constants';

export default function FeaturedRow({ title, description }) { // Destructure props properly
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 4 }}>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
            <Text style={{ color: '#888', fontSize: 16 }}>{description}</Text>
          </View>
          <TouchableOpacity>
            <Text style={{ color: '#f97316', fontWeight: 'bold' }}>See All:</Text>
          </TouchableOpacity>
        </View>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingLeft:16, paddingRight:16, paddingHorizontal: 15}}
      className="overflow-visible py-5"
      >
{/* Map over each special item and pass it to SpecialCard */}
{featured.specials.map((special, index) => (
          <SpecialCard
            specialItem={special} // Pass each individual special item
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
}