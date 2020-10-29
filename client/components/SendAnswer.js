import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function SendAnswer({ navigation }) {
  const answerText = navigation.getParam('answerText');
  // const writer = navigation.getParam('writer');
  const [writer, setWriter] = useState('');

  const sendAnswer = () => {
    const postObj = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        feedbackAnswer: answerText,
        writer: writer,
        questionId: 7,
      }),
    };
    fetch('http://192.168.1.177:3030/answers', postObj).catch((err) =>
      Alert.alert(
        'Oops!',
        'Problem with internet connection or server! Please try again',
        [{ text: 'Confirm' }]
      )
    );
  };

  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.title}>Preview</Text>
      </View>

      <View style={styles.previewBox}>
        <Text style={styles.previewText}>"{answerText}"</Text>
      </View>

      <View style={styles.containerbox}>
        <Text style={styles.answerAs}>Answer As:</Text>
        <View style={StyleSheet.buttons}>
          <TouchableOpacity style={StyleSheet.anon}>
            <Text style={styles.anonText} onPress={() => setWriter(2)}>
              Anonymous
            </Text>
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={StyleSheet.name}>
              <TextInput
                placeholder={'your name..'}
                placeholderTextColor="white"
                onChangeText={(text) => setWriter(text)}
              ></TextInput>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.send} onPress={sendAnswer}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'black',
  },
  title: {
    fontWeight: '700',
    fontSize: 30,
  },
  previewBox: {
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 50,
    borderBottomColor: 'white',
    borderBottomWidth: 3,
  },
  previewText: {
    justifyContent: 'flex-start',
    backgroundColor: 'black',
    color: 'white',
    padding: 50,
    height: 300,
    borderColor: 'white',
    borderWidth: 3,
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '700',
  },
  answerAs: {
    color: 'white',
    marginTop: 50,
    marginLeft: 30,
    fontSize: 20,
    fontWeight: '800',
    alignItems: 'center',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  anon: {
    backgroundColor: 'red',
  },
  anonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    marginLeft: 140,
  },
  inputContainer: {
    marginTop: 50,
    marginLeft: 150,
  },
  name: {
    borderColor: 'red',
    backgroundColor: 'purple',
    padding: 30,
  },
  send: {
    color: 'white',
    fontSize: 20,
    marginTop: 70,
    marginLeft: 175,
  },
  containerbox: {
    paddingBottom: 300,
  },
});
