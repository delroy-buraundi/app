import React, { useState } from 'react';
import { View, TextInput, Button, Text, Picker } from 'react-native';

export default function AddMenuItemScreen({ route, navigation }) {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starter');
  const [price, setPrice] = useState('');

  const { setMenuItems } = route.params;

  const handleAddItem = () => {
    setMenuItems(prevItems => [...prevItems, { dishName, description, course, price }]);
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Add New Menu Item</Text>

      <TextInput
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Text>Select Course:</Text>
      <Picker selectedValue={course} onValueChange={(itemValue) => setCourse(itemValue)}>
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
}
