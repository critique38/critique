import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.push('CreateFeedback');
  };

  const touchHandler = () => {
    navigation.navigate('CreateAnswer');
  };

  // dummy data
  const questions = [
    {
      question_id: 2,
      asker_id: 'Chris G.',
      receiver_id: 3,
      question: 'How can we flip this .08 as fast as possible?',
    },
    {
      question_id: 3,
      asker_id: 'Vincent',
      receiver_id: 3,
      question: `Could you rest tomorrow, take a break once we're done?`,
    },
    {
      question_id: 4,
      asker_id: 'Dylan',
      receiver_id: 3,
      question: "Why can't you exercise while programming, I do?",
    },
    {
      question_id: 5,
      asker_id: 'Joon',
      receiver_id: 3,
      question: 'What harsh truths do you prefer to ignore?',
    },
    {
      question_id: 6,
      asker_id: 'Vincent',
      receiver_id: 3,
      question: 'Will you be available at 11:30pm to work?',
    },
    {
      question_id: 7,
      asker_id: 'Joon',
      receiver_id: 3,
      question: 'Is free will real or just an illusion?',
    },
    {
      question_id: 8,
      asker_id: 'Joon',
      receiver_id: 3,
      question: 'What harsh truths do you prefer to ignore?',
    },
    {
      question_id: 9,
      asker_id: 'Vincent',
      receiver_id: 3,
      question: 'Will you be available at 11:30pm to work?',
    },
    {
      question_id: 10,
      asker_id: 'Joon',
      receiver_id: 3,
      question: 'Is free will real or just an illusion?',
    },
  ];

  // Hook for questionaire data:
  const [questionsData, setQuestionsData] = useState({});

  // Fetch outstanding questions fromd db, onload
  useEffect(() => {
    fetch('http://192.168.1.177:3030/feed')
      .then((res) => res.json())
      .then((res) => setQuestionsData(res))
      .catch((err) =>
        console.log('Failed to load outstanding questions from db:', err)
      );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logoStyle}>Critque</Text>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
        }}
      />
      <Text style={styles.outstandingStyle}>Outstanding Feedback:</Text>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(question) => question.q}
          data={questionsData}
          renderItem={({ item }) => {
            {
              if (item.usersource !== 2) {
                return (
                  <View style={styles.questions}>
                    <TouchableOpacity>
                      <Text style={styles.userNameStyle} onPress={touchHandler}>
                        {item.name}
                      </Text>
                      <Text style={styles.requestStyle} onPress={touchHandler}>
                        "{item.question}"
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        paddingTop: 20,
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1,
                      }}
                    />
                  </View>
                );
              }
            }
          }}
        />
      </View>
      <View style={styles.linkContainer}>
        <TouchableOpacity>
          <Text style={styles.linkStyle} onPress={pressHandler}>
            Request Feedback
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoStyle: {
    fontSize: 35,
    fontFamily: 'Times New Roman',
    color: 'white',
    paddingTop: 30,
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
  userNameStyle: {
    fontSize: 16,
    color: 'orange',
    paddingTop: 15,
  },
  requestStyle: {
    fontSize: 16,
    color: 'white',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  outstandingStyle: {
    fontSize: 20,
    color: '#1e90ff',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
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
  },
});
