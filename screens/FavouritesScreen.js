import React from "react";
import { StyleSheet } from "react-native";
import MealList from "../components/MealList";
import CustomHeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

const FavouritesScreen = props => {
  const favoriteMeals = useSelector(state => state.mealsReducer.favoriteMeals);

  // console.log(favoriteMeals);
  return <MealList meals={favoriteMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = navigationData => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigationData.navigation.openDrawer()}
        />
      </HeaderButtons>
    )
  };
};

export default FavouritesScreen;
