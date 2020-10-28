import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CreateAnswer() {

    const [text, setText] = useState('');

    return (
        <View>
            <View style={styles.questionPanel}>
                <Text style={styles.qTitle}>Fetched Q from home, via state{'\n'}</Text>
                <Text style={styles.qWriter}> posted by Chris Guittezzi</Text>
            </View>
            <View style={styles.contentBox}>
                {/* Question Content Panel */}  
            </View>
            {/* TODO: Cannot see inputbox when typing */}
            <View style={styles.inputBox}>
                <TextInput 
                    multiline
                    style={styles.innerInputBox}
                    placeholder={'Write feedback...'}
                    onChangeText={(input) => setText(input)}
                />
            </View>
            <View style={styles.buttons}>
                {/* <TouchableOpacity> */}
                    <Text style={styles.backButton}>back</Text>
                {/* </TouchableOpacity> */}
                {/* <TouchableOpacity> */}
                    <Text style={styles.nextButton}>next</Text>
                {/* </TouchableOpacity> */}
            </View>
     
        </View>

    )
};

const styles = StyleSheet.create({
    questionPanel: {
        paddingVertical: 50,
        backgroundColor: 'lightgreen',
    },
    qTitle: {
        fontSize: 20,
        fontWeight: '700',
    },
    qWriter: {
        fontSize: 10,
    },
    contentBox: {
        padding: 170,
        backgroundColor: 'yellow',
    },
    inputBox: {
        paddingVertical: 10,
        backgroundColor: 'orange',
    },
    innerInputBox: {
        paddingHorizontal:10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 50,
        
    },
    backButton: {
        paddingVertical: 20,
        width: 200,
        backgroundColor: 'red',

    },
    nextButton: {
        paddingVertical: 20,
        width: 200,
        backgroundColor: 'purple',
    },
})