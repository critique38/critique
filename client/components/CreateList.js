import React, {useState} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


export default function CreateList({item, pressHandler}){

  return (
    <TouchableOpacity onPress = {() => pressHandler(item.id)}>
      <Text style = {styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding:16, 
    marginTop:16, 
    borderColor: '#bbb', 
    borderWidth: 1, 
    borderStyle: 'dashed', 
    borderRadius: 10
  }
})