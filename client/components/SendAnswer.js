import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function SendAnswer({ navigation }) {
    const answerText = navigation.getParam('answerText');
    const [writer, setWriter] = useState('');
    const sendAnswer = () => {
        

    }

    return (
        <View>
            <View>
                {/* Header with HOME button */}
            </View>

            <View style={styles.previewBox}>
                <Text style={styles.previewText}>{answerText}</Text>
                <Text>posted by {writer}</Text>
            </View>

            <View>
                <Text>Answer As:</Text>
                <View style={StyleSheet.buttons}>
                    <TouchableOpacity style={StyleSheet.anon}>
                        <Text onPress={() => setWriter('Anonymous')}>Anonymous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleSheet.name}>
                        <TextInput 
                          placeholder={'your name..'}
                          onChangeText={(text) => setWriter(text)} 
                          ></TextInput>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text onPress={sendAnswer}>Send</Text>
                </TouchableOpacity>
                
            </View>
            
        </View>

    )
}

const styles = StyleSheet.create({
    previewBox: {
        backgroundColor: 'red',
        padding: 10,
        
    },
    previewText: {
        justifyContent: 'flex-start',
        backgroundColor: 'lightblue',
        padding: 50
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'blue'
    },
    anon: {
        backgroundColor: 'red',
    },
    name: {
        borderColor: 'red',
        backgroundColor: 'purple',
        padding: 30,
    },
});