import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import Categories from '../components/categories';
import { themeColors } from '../themes';
import FeaturedRow from '../components/featuredRow';
import { featured } from '../constants';

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
    <StatusBar barStyle="dark-content" />
    {/* search bar*/}
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 25, paddingHorizontal: 25, paddingBottom: 19 }}>
      <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', padding: 3, borderRadius: 20, borderWidth: 1, borderColor: 'gray' }}>
        <Icon.Search height={15} width={15} stroke="gray" />
        <TextInput placeholder="Behold..." style={{ marginLeft: 2, flex: 1 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 0, borderLeftWidth: 2, paddingLeft: 2, borderLeftColor: 'gray' }}>
          <Icon.MapPin height={20} width={20} stroke="black" />
          <Text style={{ color: 'gray' }}> Rongai</Text>
        </View>
      </View>
      <View style={{ padding: 3,backgroundColor: themeColors.bgColor(1), borderRadius: 30, marginLeft: 5 }}>
          <Icon.Sliders height={25} width={25} strokeWidth={2.5} stroke="white" />
        </View>
    </View>

    {/*main*/}
    <ScrollView showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      paddingBottom: 20
    }}
    >
      <Categories/>
      {/* featured */}
      <View className="mt-5">
        {
          [featured, featured, featured].map((item,index)=>{
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                description={item.description}
                />
            )
          })
        }
      </View>
    </ScrollView>
  </SafeAreaView>
);
}