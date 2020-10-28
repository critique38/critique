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
            <View style={styles.buttonsBox}>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.backButtonText}>back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.nextButtonText}>next</Text>
                </TouchableOpacity>
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
    buttonsBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 50,
        
    },
    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 50,
    },
    backButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 90,
    },
    nextButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 90,
    }
})