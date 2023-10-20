import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CreateTodoScreen from './src/screens/CreateTodoScreen';
import UpdateTodoScreen from './src/screens/UpdateTodoScreen';
import TodoDetailsScreen from './src/screens/TodoDetScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateTodo" component={CreateTodoScreen} />
        <Stack.Screen name="UpdateTodo" component={UpdateTodoScreen} />
        <Stack.Screen name="TodoDetails" component={TodoDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
