import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

// has access to navigation prop because this funciton is listed in homestack
export default function CreateAnswer({ navigation }) {

    // receive data from homefeed
    const question = navigation.getParam('question');
    const writer = navigation.getParam('writer');

    const [text, setText] = useState('');
    const backHandler = () => {
        navigation.pop();
    }
    const nextHandler = () => {
        // fix issue of having to click multiple times
        // passes text state to SendAnswer page
        navigation.navigate('SendAnswer', { answerText: text, writer: writer });
    };

    return (
        <ScrollView>
            <View style={styles.page}>

                <View style={styles.questionPanel}>
                    <Text style={styles.qTitle}>{question}{'\n'}</Text>
                    <Text style={styles.qWriter}>posted by {writer}</Text>
                </View>

                {/* <View style={styles.inputBox}> */}
                    <TextInput 
                        multiline
                        style={styles.innerInputBox}
                        placeholder={'Write feedback...'}
                        placeholderTextColor='white'
                        onChangeText={(input) => setText(input)}
                    />
                {/* </View> */}

                <View style={styles.buttonsBox}>
                    <TouchableOpacity style={styles.buttons} onPress={backHandler}>
                        <Text style={styles.backButtonText}>back</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={styles.buttons} onPress={nextHandler}>
                        <Text style={styles.nextButtonText}>next</Text>
                    </TouchableOpacity>         
                </View>
        
            </View>
        </ScrollView>

    )
};

// TODO: flex
const styles = StyleSheet.create({
    page: {
        // flex: 1,
    },
    questionPanel: {
        // flex: 1,
        color: 'white',
        paddingVertical: 120,
        backgroundColor: 'black',
        marginBottom: 3,
    },
    qTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        paddingLeft: 10,
    },
    qWriter: {
        color: 'gold',
        fontSize: 10,
        paddingLeft: 10,
    },
    inputBox: {
        // flex: 1,
        paddingVertical: 180,
        marginTop: 3,
        backgroundColor: 'black',
    },
    innerInputBox: {
        color: 'white',
        backgroundColor: 'black',
        paddingHorizontal:10,
        paddingVertical: 10,
        height: 400,
        justifyContent: 'flex-start',
        // alignItems: 'center',
      
    },
    buttonsBox: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        marginTop: 3 
    },
    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 30,
    },
    backButtonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 50,
        
    },
    nextButtonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginRight: 50,
    }
})