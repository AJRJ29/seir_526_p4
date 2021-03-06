import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';


export default function ContactSettingScreen({ navigation }) {
  return (
    <>
      <View key={Math.random()} style={styles.chat}>
        <Text style={{ margin: 15, fontSize: 20}}>Mute</Text>
      </View>
      <View key={Math.random()} style={styles.chat}>
        <Text style={{ margin: 15, fontSize: 20}}>Edit Contact</Text>
      </View>
      <View key={Math.random()} style={styles.chat}>
        <Text style={{ margin: 15, fontSize: 20}}>Delete Contact</Text>
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