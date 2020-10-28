import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Home({ navigation }) {

  const pressHandler = () => {
    navigation.push('CreateFeedback')
  }

  const touchHandler = () => {
    navigation.navigate('CreateAnswer');
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
        <TouchableOpacity>
          <Text onPress={touchHandler}>Sample Question from Chris</Text>
        </TouchableOpacity>
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