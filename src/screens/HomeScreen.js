import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch('https://todo-api-7cnt.onrender.com/api/todos/get');
            const data = await response.json();
            setTodos(data.todos);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    }

    const navigateToTodoDetails = (todo) => {
        navigation.navigate('TodoDetails', {
            todoName: todo.todoName,
            todoDescription: todo.todoDescription,
        });
    }

    const deleteTodo = async (id) => {
        try {
            console.log(id)
            await fetch(`https://todo-api-7cnt.onrender.com/api/todos/delete/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            console.log("Deleted")
            getTodos(); // Update the list after deletion
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    }

    useEffect(() => {
        getTodos();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Todo List</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateTodo')}>
                <Text style={styles.buttonText}>Create Todo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => getTodos()}>
                <Text style={styles.buttonText}>Refresh</Text>
            </TouchableOpacity>

            <View style={styles.todoContainer}>
                {todos.map(todo => (
                    <TouchableOpacity
                        style={styles.todoItem}
                        key={todo.id}
                        onPress={() => navigateToTodoDetails(todo)}
                    >
                        <Text style={styles.todoName}>{todo.todoName}</Text>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.button1} onPress={() => deleteTodo(todo._id)}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button1}
                                onPress={() => navigation.navigate('UpdateTodo', {
                                    id: todo._id,
                                    todoName: todo.todoName,
                                    todoDescription: todo.todoDescription,
                                })}
                            >
                                <Text style={styles.buttonText}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
        marginTop: 12
    },
    button: {
        backgroundColor: 'red',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        width: 'fit-content',
        marginVertical: 10,
    },
    button1: {
        backgroundColor: 'blue',
        paddingHorizontal: 4,
        paddingVertical: 10,
        borderRadius: 5,
        width: 'fit-content',
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    todoContainer: {
        width: '80%',
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 4,
        backgroundColor: "gray",
        borderRadius: "12"
    },
    todoName: {
        fontSize: 16,
        flex: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: '12'
    },
    buttons: {
        marginLeft: 10,
    },
});
