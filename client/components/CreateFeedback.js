import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, Animated, TouchableHighlight, TouchableOpacity, StatusBar } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import CreateList from '../components/CreateList'
import CreateInput from '../components/CreateInput'
import { SwipeListView  } from 'react-native-swipe-list-view';

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

  const deleteRow = (rowMap,rowKey) => {
    const newData = [...questions];
    const prevIndex = questions.findIndex(item => item.id === rowKey);
    newData.splice(prevIndex, 1);
    setQuestions(newData);
  }

  const HiddenItemWithActions = props => {
    const {onClose, onDelete} = props;

    return(
      <View style = {styles.rowBack}>
        <TouchableOpacity style ={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress = {onDelete}>
        <Text> Delete </Text>
        </TouchableOpacity>

      </View>
    )
  }

  const VisibleItem = props => { 
    const {data} = props;

    return (
      <View style = {styles.rowFront}>
      <TouchableHighlight style = {styles.rowFrontVisible}>
        <View>
          <Text style = {styles.title} numberOfLines = {1}>
          {data.item.text}
          </Text>
        </View>
      </TouchableHighlight>
      </View>
    ) 
  }

  const renderItem = (data,rowMap) => {
    return (
      <VisibleItem data = {data} />
    )
  }

  const renderHiddenItem = (data, rowMap) => {
    return (
    <HiddenItemWithActions
    data = {data}
    rowMap = {rowMap}
    onDelete = {() => deleteRow(rowMap,data.item.id)}
    />
    )
  }


  return (
    <View style={styles.container}>
      <CreateInput submitHandler = {submitHandler}/>
      <View style = {styles.list}>
 
        <SwipeListView
        data = {questions}
        renderItem = {renderItem}
        renderHiddenItem = {renderHiddenItem}
        leftOpenValue ={0}
        rightOpenValue = {-75}
          /> 
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
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    margin: 5,
    marginBottom: 15,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    padding: 10,
    marginBottom: 15,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: '#1f65ff',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
  details: {
    fontSize: 12,
    color: '#999',
  },
});