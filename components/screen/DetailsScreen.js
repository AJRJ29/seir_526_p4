import React, { useState } from 'react';
import { Button, Text, View, TextInput, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  const [messages, setMessages] = useState('')
  let [allMessages, setAllMessages] = useState([])

  const messageSubmit = () => {
    setAllMessages([...allMessages, messages])
    setMessages('')
  }

  const mapMessages = allMessages.map(message => {
    return <View style={styles.chat}><Text key={Math.random()} >{message}</Text></View>
  })

  return (
    <>
    <View>
      {mapMessages}
    </View> 
    <View style={styles.view}>
      <TextInput style={styles.input} value={messages} onChangeText={setMessages}></TextInput>
      <Button onPress={messageSubmit} title="submit"/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#514E5A",
  },
  view: {
    flex: 1, 
    justifyContent: "flex-end",
  },
  chat: {
    height: 'auto',
    width: 'auto',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#514E5A",
    margin: 10,
    justifyContent: "center",
    padding: 10
  },
})