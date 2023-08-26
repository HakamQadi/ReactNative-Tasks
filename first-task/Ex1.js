import React from 'react'
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const Ex1 = () => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        height: 100,
        width: 100,
        alignItems: 'center',
      }}>
      <Text>Hello World!</Text>
    </View>
  )
}

export default Ex1
