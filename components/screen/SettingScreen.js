import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';


export default function SettingScreen({ navigation }) {
  return (
    <>
      <View key={Math.random()} style={styles.chat}>
        <Text style={{ margin: 15, fontSize: 20}} onPress={() => navigation.navigate('Chat')}>General Settings</Text>
      </View>
      <View key={Math.random()} style={styles.chat}>
        <Text style={{ margin: 15, fontSize: 20}} onPress={() => navigation.navigate('Chat')}>Account</Text>
      </View>
    </>
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