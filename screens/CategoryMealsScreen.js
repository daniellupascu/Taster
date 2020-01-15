import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategotyMealScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");

  return (
    <View style={styles.screen}>
      <Text> {CATEGORIES.find(cat => cat.id === categoryId).title} </Text>
      <Button
        title="go to meal"
        onPress={() => props.navigation.push("MealDetail")}
      />
      <Button title="go back" onPress={() => props.navigation.pop()} />
    </View>
  );
};

CategotyMealScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const categoryTitle = CATEGORIES.find(cat => cat.id === categoryId).title;
  return {
    headerTitle: categoryTitle
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategotyMealScreen;
