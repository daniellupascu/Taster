import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategotyMealScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";

const TasterNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategotyMealScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
    }
  }
);

export default createAppContainer(TasterNavigator);
