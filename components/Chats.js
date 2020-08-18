import * as React from 'react';
import { createStackNavigator, DefaultTheme } from '@react-navigation/stack';

import HomeScreen from './screen/HomeScreen'
import DetailsScreen from './screen/DetailsScreen'
import ContactSettingScreen from './screen/ContactSettingScreen'

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
      options={{
        headerStyle: {
          backgroundColor: '#20B2AA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} 
      name="Contacts" 
      component={HomeScreen} />
      <HomeStack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#20B2AA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
       name="Chat" 
       component={DetailsScreen} />
      <HomeStack.Screen 
      options={{
        headerStyle: {
          backgroundColor: '#20B2AA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} 
      name="ContactSettings" 
      component={ContactSettingScreen} />
    </HomeStack.Navigator>
  );
}
