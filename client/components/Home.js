import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Home({navigation}) {

  const pressHandler = () => {
    navigation.push('CreateFeedback')
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>Sample Question from Chris</Text>
      <Button 
      title = 'Next'
      onPress = {pressHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});