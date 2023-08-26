import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Ex5 from './Ex5';
import Ex6 from './Ex6';
import Ex7 from './Ex7';
import Ex8 from './Ex8';
import Ex9 from './Ex9';
import Ex10 from './Ex10';
import Ex11 from './Ex11';
import Ex12 from './Ex12';

export default function App() {
  return (

    <View style={{ marginTop:50, paddingHorizontal: 20 }}>
      <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
        hidden={false}
        translucent={true}
      />
      {/* <Ex1 /> */}
      {/* <Ex2 /> */}
      {/* <Ex3 /> */}
      {/* <Ex4 /> */}
      {/* <Ex5 /> */}
      {/* <Ex6 /> */}
      {/* <Ex7 /> */}
      {/* <Ex8 /> */}
      {/* <Ex9 /> */}
      {/* <Ex10 /> */}
      {/* <Ex11 /> */}
      <Ex12 />

    </View>
  );
}