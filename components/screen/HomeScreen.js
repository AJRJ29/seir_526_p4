import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

let names = [
  'Aaron', 'Jonjon', 'Rj', 'Salman', 'Nick', 'Zack'
]

export default function HomeScreen({ navigation }) {
  return (
    names.map(name => {
      return (
        <View key={Math.random()} style={styles.chat}>
          <Text style={{ margin: 15, fontSize: 20}} onPress={() => navigation.navigate('Details')}>{name}</Text>
        </View>
      )
    })
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