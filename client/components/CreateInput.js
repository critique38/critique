import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="..."
        placeholderTextColor="orange"
        onChangeText={changeHandler}
        style={styles.prompt}
      />
      <TouchableOpacity
        onPress={() => {
          submitHandler(text);
        }}
      >
        <Text style={styles.submit}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  prompt: {
    color: 'orange',
    paddingTop: 25,
    padding: 10,
    paddingBottom: 20,
  },
  submit: {
    color: '#1e90ff',
    padding: 10,
    paddingBottom: 20,
  },
});
