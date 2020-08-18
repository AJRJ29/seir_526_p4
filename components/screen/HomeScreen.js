import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

let names = [
  'Aaron', 'Jonjon', 'Rj', 'Salman', 'Nick', 'Zack', 'NickQ', 'Erick',
]

export default function HomeScreen({ navigation }) {
  return (
    names.map(name => {
      return (
        <View key={Math.random()} style={styles.view1}>
          <View style={styles.view2}>
            <Text onPress={() => navigation.navigate('ContactSettings')}>...</Text>
          </View>
          <View style={styles.view}>
            <Text style={{ marginBottom: 10, fontSize: 20}} onPress={() => navigation.navigate('Chat')}>{name}</Text>
          </View>
        </View>
      )
    })
  );
}

const styles = StyleSheet.create({
  view1: {
    height: 70,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 10,
    paddingHorizontal: 16,
    color: "#514E5A",
    margin: 15,
    backgroundColor: 'white'
  },
  view: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  view2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
})