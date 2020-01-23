import React, { useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  Image
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = props => {
  const meals = useSelector(state => state.mealsReducer.meals);
  const mealId = props.navigation.getParam("id");
  const isMealFavorite = useSelector(
    state => state.mealsReducer.favoriteMeals
  ).some(meal => meal.id === mealId);
  const meal = meals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavMealHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({
      toggleFavMeal: toggleFavMealHandler
    });
  }, [toggleFavMealHandler]);

  useEffect(() => {
    // we are setting this param here so that the icon will update when clicking on it
    props.navigation.setParams({
      isMealFavorite
    });
  }, [isMealFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{meal.duration}</DefaultText>
        <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
      </View>

      <Text style={styles.title}>Ingredients</Text>
      {meal.ingredients.map((ing, i) => (
        <View key={i} style={styles.listItem}>
          <Text>{ing}</Text>
        </View>
      ))}
      <Text style={styles.title}>steps</Text>
      {meal.steps.map((step, i) => (
        <View key={i} style={styles.listItem}>
          <Text>{step}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavMeal = navigationData.navigation.getParam("toggleFavMeal");
  const isMealFavorite = navigationData.navigation.getParam("isMealFavorite");

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favourite"
          iconName={isMealFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavMeal}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15
  },
  title: {
    textAlign: "center",
    fontSize: 24
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailScreen;
