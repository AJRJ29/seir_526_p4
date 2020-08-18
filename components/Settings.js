import * as React from 'react';
import { createStackNavigator, DefaultTheme } from '@react-navigation/stack';
import { Button, Text, View, StyleSheet } from 'react-native';

import SettingScreen from './screen/SettingScreen'

const SettingStack = createStackNavigator();

export default function Settings() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen 
      options={{
        headerStyle: {
          backgroundColor: '#20B2AA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} 
      name="Settings" 
      component={SettingScreen} />
    </SettingStack.Navigator>
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