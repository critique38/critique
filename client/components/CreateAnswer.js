import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

// has access to navigation prop because this funciton is listed in homestack
export default function CreateAnswer({ navigation }) {
  const [text, setText] = useState('');
  const backHandler = () => {
    navigation.pop();
  };
  const nextHandler = () => {
    // fix issue of having to click multiple times
    // passes text state to SendAnswer page
    navigation.navigate('SendAnswer', { answerText: text });
  };

  return (
    <ScrollView>
      <View style={styles.page}>
        <View style={styles.questionPanel}>
          <Text style={styles.qTitle}>
            get Q from home, via prop-drill{'\n'}
          </Text>
          <Text style={styles.qWriter}>
            {' '}
            posted by Joon Kim , also prop-drilled
          </Text>
        </View>

        <View style={styles.contentBox}>
          {/* Question Content Panel */}
          <Text style={styles.contentText}>Question content, prop-drilled</Text>
        </View>

        <View style={styles.inputBox}>
          <TextInput
            multiline
            style={styles.innerInputBox}
            placeholder={'Write feedback...'}
            onChangeText={(input) => setText(input)}
          />
        </View>

        <View style={styles.buttonsBox}>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.backButtonText} onPress={backHandler}>
              back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.nextButtonText} onPress={nextHandler}>
              next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

// TODO: flex
const styles = StyleSheet.create({
  page: {
    // flex: 1,
  },
  questionPanel: {
    // flex: 1,
    paddingVertical: 80,
    backgroundColor: 'lightgreen',
  },
  qTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  qWriter: {
    fontSize: 10,
  },
  contentBox: {
    // flex: 1,
    paddingBottom: 300,
    backgroundColor: 'yellow',
  },
  contentText: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  inputBox: {
    // flex: 1,
    paddingVertical: 20,
    backgroundColor: 'orange',
  },
  innerInputBox: {
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  buttonsBox: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 50,
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 90,
  },
  nextButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 90,
  },
});
