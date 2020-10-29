import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, Share } from 'react-native';

export default function SendFeedback({navigation}) {

  const pressBack = () => {
    navigation.pop();
  }

  const onShare = () => {

    Share.share({
      message:link,
      title:'google.com'
    })

  }

  return (
    <View style={styles.container}>
      <Text>This is your generated link below:</Text>
      <Text>{navigation.getParam('link')}</Text>
      <Button 
      onPress = {onShare}
      title = 'Share' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});