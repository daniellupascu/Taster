import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

const MealList = props => {
  // const [favMeals, setFavMeals] = useState(
  //   useSelector(state => state.mealsReducer.favoriteMeals)
  // );
  const favMeals = useSelector(state => state.mealsReducer.favoriteMeals);

  const renderMeals = ({ item }) => {
    const isMealFavorite = favMeals.some(meal => meal.id === item.id);
    return (
      <MealItem
        meal={item}
        onPress={() => {
          props.navigation.push("MealDetail", {
            id: item.id,
            mealTitle: item.title,
            isMealFavorite
          });
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        style={{ width: "100%" }}
        data={props.meals}
        renderItem={renderMeals}
      />
    </View>
  );
};

export default MealList;
