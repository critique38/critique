import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, Animated, TouchableHighlight, TouchableOpacity, StatusBar } from 'react-native';
import { FlatList} from 'react-native-gesture-handler';
import {SwipeListView} from 'react-native-swipe-list-view'


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