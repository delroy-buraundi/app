import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [menuItems, setMenuItems] = useState([]);

  // Calculate the average price for each course
  const calculateAveragePrice = () => {
    const coursePrices = {};

    menuItems.forEach((item) => {
      if (!coursePrices[item.course]) {
        coursePrices[item.course] = { total: 0, count: 0 };
      }
      coursePrices[item.course].total += item.price;
      coursePrices[item.course].count += 1;
    });

    const averagePrices = {};
    for (const course in coursePrices) {
      averagePrices[course] =
        coursePrices[course].total / coursePrices[course].count;
    }

    return averagePrices;
  };

  const averagePrices = calculateAveragePrice();

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

      {Object.keys(averagePrices).map((course) => (
        <Text key={course}>
          Average Price for {course}: ${averagePrices[course].toFixed(2)}
        </Text>
      ))}

      <Button
        title="Add New Menu Item"
        onPress={() => navigation.navigate('AddMenuItem', { setMenuItems })}
      />
    </View>
  );
}
