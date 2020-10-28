import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function CreateAnswer() {

    const [text, setText] = useState('');

    return (
        <ScrollView>
            <View style={styles.page}>
                <View style={styles.questionPanel}>
                    <Text style={styles.qTitle}>Fetched Q from home, via state{'\n'}</Text>
                    <Text style={styles.qWriter}> posted by Joon Kim </Text>
                </View>
                <View style={styles.contentBox}>
                    {/* Question Content Panel */}  
                    <Text style={styles.contentText}>Question content, also from home via state</Text>
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
        paddingVertical: 80,
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
        // flex: 1,
        paddingBottom: 300,
        backgroundColor: 'yellow',
    },
    contentText: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 10,
    },
    inputBox: {
        // flex: 1,
        paddingVertical: 20,
        backgroundColor: 'orange',
    },
    innerInputBox: {
        paddingHorizontal:10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    buttonsBox: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue', 
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