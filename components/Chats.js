import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screen/HomeScreen'
import DetailsScreen from './screen/DetailsScreen'

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Chats" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}