import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// OAuth implemented on this page

export default function Login({ navigation }) {
  const pressHandler = () => {
    navigation.push('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>✏️</Text>
      <Text style={styles.logoStyle}>Critique</Text>
      <Text style={styles.subHeader}>A Feedback Request App</Text>
      <TouchableOpacity>
        <Text style={styles.linkStyle} onPress={pressHandler}>
          Login
        </Text>
      </TouchableOpacity>
      <Text style={styles.footer}>Let's grow together.</Text>
      {/* <Text style={styles.footer2}>
        Made with ❤️️ by Vince, Joon, Dylan, Chris, and Case.
      </Text> */}
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
  emoji: {
    paddingBottom: 25,
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
  footer: {
    fontSize: 10,
    fontStyle: 'italic',
    color: 'grey',
    paddingTop: 50,
  },
  footer2: {
    fontSize: 8,
    fontStyle: 'italic',
    color: 'grey',
    paddingTop: 50,
  },
});
