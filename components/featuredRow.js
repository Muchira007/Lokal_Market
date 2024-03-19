import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import SpecialCard from './SpecialCard';
import { featured } from '../constants'; // Import the 'featured' array

export function FeaturedRow({ title, description, specials }) {
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
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16, paddingHorizontal: 15 }}
        className="overflow-visible py-5"
      >
        {/* Map over the 'specials' array passed as prop */}
        {specials.map((special) => (
          <SpecialCard
            specialItem={special}
            key={special.id} // Use a unique key for each SpecialCard
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default function Featured() {
  const uniqueTitles = new Set(); // Set to store unique titles

  return (
    <>
      {/* Map over the 'featured' array */}
      {featured.map((item) => {
        if (!uniqueTitles.has(item.title)) {
          uniqueTitles.add(item.title); // Add title to set
          return (
            <FeaturedRow
              key={item.id} // Use id as key
              title={item.title}
              description={item.description}
              specials={item.specials}
            />
          );
        }
        return null; // Skip rendering if title is already processed
      })}
    </>
  );
}




