import React, {useState} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import CreateList from '../components/CreateList'
import CreateInput from '../components/CreateInput'

export default function CreateFeedback({navigation}) {

  const [questions,setQuestions] = useState([
    {text: 'How can I be better?', id: '1'}, 
    {text: 'How can I do more?', id: '2'}, 
    {text: 'What is my biggest strength?', id: '3'}, 
  ])

  const submitHandler = (text) => {
    setQuestions((prevQuestions) => {
      return [
        {text: text, id: Math.random().toString()}, 
        ...prevQuestions
      ]
    })
  }

  const pressHandler = (id) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.filter(quest => quest.id != id)
    })
  }

 
  const pressNext = () => {
    navigation.push('SendFeedback')
  }

  const pressBack = () => {
    navigation.pop();
  }

  return (
    <View style={styles.container}>

      <CreateInput submitHandler = {submitHandler}/>

      <View style = {styles.list}>
        <FlatList
        data = {questions}
        renderItem = {({item}) => (
          <CreateList 
          item = {item}
          pressHandler = {pressHandler}/>
        )}>

        </FlatList>
      </View>

      <View style = {styles.buttonContainer}>
      <Button 
      title = 'Next'
      onPress = {pressNext}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});