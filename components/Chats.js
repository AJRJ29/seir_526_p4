import * as React from 'react';
import { createStackNavigator, DefaultTheme } from '@react-navigation/stack';

import HomeScreen from './screen/HomeScreen'
import DetailsScreen from './screen/DetailsScreen'

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
      options={{
        headerStyle: {
          backgroundColor: '#f4511e',
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
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
       name="Chat" 
       component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

// const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'rgb(255, 45, 85)',
//     background: 'rgb(242, 242, 242)',
//     card: 'rgb(255, 255, 255)',
//     text: 'rgb(28, 28, 30)',
//     border: 'rgb(199, 199, 204)',
//     notification: 'rgb(255, 69, 58)',
//   },
// };