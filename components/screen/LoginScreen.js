import * as React from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';


export default function LoginScreen({ navigation }) {
  return (
    <>
      <View style={styles.view}>
        <TextInput style={styles.input}></TextInput>
        <View style={styles.chat}>
          <Button style={styles.chat} title="Login" onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  chat: {
    height: 40,
    width: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 10,
    paddingHorizontal: 16,
    color: "#514E5A",
    marginLeft: 40,
    backgroundColor: 'white'
  },
  input: {
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    paddingHorizontal: 16,
    color: "#514E5A",
    backgroundColor: 'white', 
    borderRadius: 10,
    margin: 40,
  },
  view: {
    flex: 1, 
    justifyContent: "center",
  },
})