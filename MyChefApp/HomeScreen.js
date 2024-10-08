import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [menuItems, setMenuItems] = useState([]);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Chef's Menu</Text>
      <FlatList 
        data={menuItems}
        renderItem={({ item }) => (
          <Text>{item.dishName} - {item.course} - ${item.price}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text>Total Items: {menuItems.length}</Text>

      <Button
        title="Add New Menu Item"
        onPress={() => navigation.navigate('AddMenuItem', { setMenuItems })}
      />
    </View>
  );
}
