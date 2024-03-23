import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    // Navigate to the Home screen
    navigation.navigate('LoginScreen');
  };

  const handleSignUpPress = () => {
    // Navigate to the SignUp screen
    navigation.navigate('LoginScreen');
  };

  return (
    <View className="bg-white h-full w-full">
        <StatusBar style="light"/>
        <Image className="h-full w-full absolute" source={require('../assets/signup3.jpg')}>

        </Image>
        {/* <View className="flex-row justify-around w-full absolute">
            <Image className="h-[225] w-[90]" source={require()}/>
        </View> */}
        <View className="h-full w-full justify-around pt-40 pb-10">
            <View className="f;ex items-center">
                <Text className="text-white font-bold tracking-wider text-5xl">
                    Sign Up
                </Text>
            </View>
            <View className="flex items-center mx-4 space-y-4">
                <View className="bg-white p-5 rounded-2xl w-full">
                    <TextInput placeholder='Email' placeholderTextColor={'black'}/>
                </View>
                <View className="bg-black p-5 rounded-2xl w-full mb-3">
                    <TextInput placeholder='Password' placeholderTextColor={'white'} secureTextEntry/>
                </View>
                <View style={{ width: '100%' }}>
                    <TouchableOpacity
                        style={{
                        width: '100%',
                        backgroundColor: '#d5f4e6',
                        padding: 10,
                        borderRadius: 20,
                        marginBottom: 10,
                        }}
                        onPress={handleLoginPress}
                    >
                        <Text style={{ fontSize: 20, color: 'black', textAlign: 'center', fontWeight: 'bold' }}>Create Account</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Already have an existing account..?</Text>
                        <TouchableOpacity onPress={handleSignUpPress}>
                        <Text style={{ fontSize: 24, color: '#d5f4e6', fontWeight: 'bold' }}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </View>
  );
}