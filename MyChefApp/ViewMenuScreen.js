import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function ViewMenuScreen({ route }) {
  const { menuItems } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Menu Items</Text>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <Text>{item.dishName} - {item.course} - ${item.price}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
