import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// TODO import condensed Outstanding Questionaires

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.push('CreateFeedback');
  };

  // Dummy data for username
  const userName = <Text style={styles.userNameStyle}>Chris</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.logoStyle}>Critque</Text>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
        }}
      />
      <Text style={styles.requestStyle}>
        {userName} requests your feedback for the following questions:
      </Text>
      {/* <Questionaire /> */}
      <View style={styles.linkContainer}>
        <TouchableOpacity>
          <Text style={styles.linkStyle} onPress={pressHandler}>
            Create Feedback
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  logoStyle: {
    fontSize: 35,
    fontFamily: 'Times New Roman',
    color: 'white',
    paddingTop: 60,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  userNameStyle: {
    fontSize: 16,
    color: 'orange',
  },
  requestStyle: {
    fontSize: 16,
    color: 'white',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  linkContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
  },
  linkStyle: {
    fontSize: 20,
    color: '#1e90ff',
  },
});
