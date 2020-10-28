import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function CreateFeedback({navigation}) {

  const pressNext = () => {
    navigation.push('SendFeedback')
  }

  const pressBack = () => {
    navigation.pop();
  }

  return (
    <View style={styles.container}>
      <Text>CreateFeedback</Text>
      <Button 
      title = 'Next'
      onPress = {pressNext}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});