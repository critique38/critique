import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.push('CreateFeedback');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoStyle}>Critique</Text>
      <Text style={styles.subHeader}>A Feedback Request App</Text>
      <TouchableOpacity>
        <Text style={styles.linkStyle} onPress={pressHandler}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    fontSize: 35,
    fontFamily: 'Times New Roman',
    color: 'white',
    paddingBottom: 20,
  },
  subHeader: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    color: 'lightgrey',
    paddingBottom: 50,
  },
  linkStyle: {
    fontSize: 18,
    color: 'orange',
    paddingBottom: 50,
  },
});
