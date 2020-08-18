import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer ,DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, } from '@react-navigation/stack';

import Chats from './components/Chats'
import Notification from './components/Notification'
import Settings from './components/Settings'
import LoginScreen from './components/screen/LoginScreen'


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen 
          options={{
            headerStyle: {
              backgroundColor: '#20B2AA',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
          name="Home" component={Chats} />
        <Drawer.Screen name="Notifications" component={Notification} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
