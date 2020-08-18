import * as React from 'react';
import { createStackNavigator, DefaultTheme } from '@react-navigation/stack';
import { Button, Text, View, StyleSheet } from 'react-native';

import NotificationScreen from './screen/NotificationScreen'

const NotifyStack = createStackNavigator();

export default function Notification() {
  return (
    <NotifyStack.Navigator>
      <NotifyStack.Screen 
      options={{
        headerStyle: {
          backgroundColor: '#20B2AA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} 
      name="Notification" 
      component={NotificationScreen} />
    </NotifyStack.Navigator>
  );
}

const styles = StyleSheet.create({
  chat: {
    height: 70,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 10,
    paddingHorizontal: 16,
    color: "#514E5A",
    margin: 10,
    backgroundColor: 'white'
  },
})
