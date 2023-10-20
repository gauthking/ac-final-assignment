import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function UpdateTodoScreen({ route, navigation }) {
    const [todoName, setTodoName] = useState(route.params.todoName);
    const [todoDescription, setTodoDescription] = useState(route.params.todoDescription);

    const handleUpdateTodo = () => {
        fetch(`https://todo-api-7cnt.onrender.com/api/todos/update/${route.params.id}`, {
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
                console.log('Todo updated:', data);
                navigation.goBack();
            })
            .catch(error => {
                console.error('Error updating todo:', error);
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
            <Button title="Update Todo" onPress={handleUpdateTodo} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});