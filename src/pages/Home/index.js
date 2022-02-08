import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView, 
  TextInput
} from 'react-native';

export function Home() {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.title}
      >Bem vindo, Danilo</Text>

      <TextInput 
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title:{
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
  }, 
  input:{
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: 15,
    borderRadius: 5,
  }
})
