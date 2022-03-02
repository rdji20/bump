import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MyTabs}  from './navigation/MainContainer';

export default function App() {
  return <MyTabs />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
