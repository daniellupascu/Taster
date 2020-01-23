import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const CategotyMealScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector(state => state.mealsReducer.filteredMeals);

  const categoryMeals = availableMeals.filter(meal =>
    meal.categoryIds.includes(categoryId)
  );

  return <MealList meals={categoryMeals} navigation={props.navigation} />;
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
