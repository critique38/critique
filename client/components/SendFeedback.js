import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Share } from 'react-native';

export default function SendFeedback({ navigation }) {
  const pressBack = () => {
    navigation.pop();
  };

  const onShare = () => {
    Share.share({
      message: 'www.critique.com/user91241/href88312',
      title: 'www.critique.com/user91241/href88312',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoStyle}>Critque</Text>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
        }}
      />
      <View style={styles.container2}>
        <Text style={styles.userNameStyle}>This is your generated link:</Text>
        <Text style={styles.textStyle}>
          www.critique.com/user91241/href88312
        </Text>
      </View>
      <View style={styles.linkContainer}>
        <Button style={styles.linkStyle} onPress={onShare} title="Share" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoStyle: {
    fontSize: 35,
    fontFamily: 'Times New Roman',
    color: 'white',
    paddingTop: 70,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  container: {
    flex: 10,
    backgroundColor: 'black',
    paddingLeft: 10,
    paddingRight: 10,
  },
  container2: {
    flex: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  userNameStyle: {
    fontSize: 16,
    color: 'orange',
    paddingTop: 15,
  },
  linkContainer: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: 'grey',
  },
  linkStyle: {
    fontSize: 20,
    color: '#1e90ff',
    padding: 20,
  },
  textStyle: {
    color: 'lightblue',
    padding: 20,
  },
});
