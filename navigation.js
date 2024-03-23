import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import Market from './screens/Market';
import catalog from './screens/catalog';
import CartScreen from './screens/CartScreen';
import OrderPreparing from './screens/OrderPreparing';
import Delivery from './screens/Delivery';
import LoginScreen from './screens/LoginScreen';
import SignUp from './screens/signUp';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='LoginScreen'
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lokal Market" component={Market} />
        <Stack.Screen name="Catalog" component={catalog} />
        <Stack.Screen name="CartScreen"options={{presentation: 'modal'}} component={CartScreen} />
        <Stack.Screen name="OrderPreparing" options={{presentation: 'fullScreenModal'}} component={OrderPreparing}/>
        <Stack.Screen name="Delivery" options={{presentation: 'fullScreenModal'}} component={Delivery} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}