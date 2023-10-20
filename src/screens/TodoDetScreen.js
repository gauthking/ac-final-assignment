import React from 'react';
import { View, Text } from 'react-native';

export default function TodoDetailsScreen({ route }) {
  const { todoName, todoDescription } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>{todoName}</Text>
      <Text>{todoDescription}</Text>
    </View>
  );
}
