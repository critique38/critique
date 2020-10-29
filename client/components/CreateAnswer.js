import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

// has access to navigation prop because this funciton is listed in homestack
export default function CreateAnswer({ navigation }) {

    const [text, setText] = useState('');
    const backHandler = () => {
        navigation.pop();
    }
    const nextHandler = () => {
        // fix issue of having to click multiple times
        // passes text state to SendAnswer page
        navigation.navigate('SendAnswer', { answerText: text });
    };

    return (
        <ScrollView>
            <View style={styles.page}>

                <View style={styles.questionPanel}>
                    <Text style={styles.qTitle}>get Q from home, via prop-drill{'\n'}</Text>
                    <Text style={styles.qWriter}> posted by Joon Kim , also prop-drilled</Text>
                </View>

                {/* remove this */}
                <View style={styles.contentBox}>
                    {/* Question Content Panel */}  
                    <Text style={styles.contentText}>Question content, prop-drilled</Text>
                </View>

                <View style={styles.inputBox}>
                    <TextInput 
                        multiline
                        style={styles.innerInputBox}
                        placeholder={'Write feedback...'}
                        placeholderTextColor='white'
                        onChangeText={(input) => setText(input)}
                    />
                </View>

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
        paddingVertical: 80,
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
    contentBox: {
        // flex: 1,
        paddingBottom: 300,
        backgroundColor: 'black',
    },
    contentText: {
        color: 'white',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 10,
    },
    inputBox: {
        // flex: 1,
        paddingVertical: 10,
        marginTop: 3,
        backgroundColor: 'black',
    },
    innerInputBox: {
        color: 'white',
        backgroundColor: 'black',
        paddingHorizontal:10,
        paddingVertical: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      
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