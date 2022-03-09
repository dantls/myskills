import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill(){
    if(newSkill === ''){
      return;
    }
    setMySkills(oldState => [...oldState, newSkill]);
    setNewSkill('');
  }

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
        onChangeText={setNewSkill}
        value={newSkill}
      />

      <TouchableOpacity 
        style={styles.button}
        activeOpacity={.7}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginTop: 50}]}>
        My Skills
      </Text>
      
      {mySkills.map((skill) =>
        (
          <TouchableOpacity 
            style={styles.buttonSkill}
            key={skill}
          >
          <Text style={styles.textSkill}>
              {skill}
          </Text>
          </TouchableOpacity>
        )
      )}
      
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
  },
  button:{
    padding: 15,
    backgroundColor: '#A370F7',
    borderRadius:7,
    marginTop:20,
    alignItems: 'center',
  },
  buttonText:{
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonSkill:{
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius:50,
    alignItems: 'center',
    marginBottom:10
  },
  textSkill:{
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',

  }
})
