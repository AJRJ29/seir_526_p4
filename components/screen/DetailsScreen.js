import React, { useState } from 'react';
import { Button, Text, SafeAreaView, TextInput, StyleSheet, View } from 'react-native';

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
      {mapMessages}
    <View style={styles.view}>
      <TextInput style={styles.input} value={messages} onSubmitEditing={messageSubmit} onChangeText={setMessages}></TextInput>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderBottomColor: 'transparent',
    paddingHorizontal: 16,
    color: "#514E5A",
    marginBottom: 40 
  },
  view: {
    flex: 1, 
    justifyContent: "flex-end",
  },
  chat: {
    height: 'auto',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 10,
    paddingHorizontal: 16,
    color: "#514E5A",
    margin: 10,
    justifyContent: "center",
    padding: 20,
    backgroundColor: 'white'
  },
})