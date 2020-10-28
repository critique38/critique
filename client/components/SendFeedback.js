import React from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';

export default function SendFeedback({navigation}) {

  const pressBack = () => {
    navigation.pop();
  }

  return (
    <View style={styles.container}>
      <Text>SendFeedback</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});