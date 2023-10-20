import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function CreateTodoScreen({ navigation }) {
    const [todoName, setTodoName] = useState('');
    const [todoDescription, setTodoDescription] = useState('');

    const handleCreateTodo = () => {
        fetch('https://todo-api-7cnt.onrender.com/api/todos/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                todoName: todoName,
                todoDescription: todoDescription,
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Todo created:', data);
                navigation.goBack();
            })
            .catch(error => {
                console.error('Error creating todo:', error);
            });
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Todo Name"
                value={todoName}
                onChangeText={text => setTodoName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Todo Description"
                value={todoDescription}
                onChangeText={text => setTodoDescription(text)}
            />
            <Button title="Create Todo" onPress={handleCreateTodo} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
    },
});
