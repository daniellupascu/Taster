// import React from "react";
// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from "react-navigation-tabs";
// import CategoriesScreen from "../screens/CategoriesScreen";
// import CategotyMealScreen from "../screens/CategoryMealsScreen";
// import MealDetailScreen from "../screens/MealDetailScreen";
// import { Platform, Text } from "react-native";
// import Colors from "../constants/Colors";
// import FavouritesScreen from "../screens/FavouritesScreen";
// import Ionicons from "@expo/vector-icons";

// const TasterNavigator = createStackNavigator(
//   {
//     Categories: CategoriesScreen,
//     CategoryMeals: {
//       screen: CategotyMealScreen
//     },
//     MealDetail: MealDetailScreen
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
//       },
//       headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
//     }
//   }
// );

// const TasterFavTabNavigator = createBottomTabNavigator(
//   {
//     Meals: {
//       screen: TasterNavigator,
//       navigationOptions: {
//         tabBarIcon: tabInfo => {
//           return (
//             <Ionicons
//               name="ios-restaurant"
//               size={25}
//               color={tabInfo.tintColor}
//             />
//           );
//         }
//       }
//     },
//     Favourites: {
//       screen: FavouritesScreen,
//       navigationOptions: () => ({
//         tabBarIcon: tabInfo => {
//           return (
//             <Text>fff</Text>
//             //   <Ionicons
//             //     name="ios-restaurant"
//             //     size={25}
//             //     color={tabInfo.tintColor}
//             //   />
//           );
//         }
//       })
//     }
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: Colors.primaryColor
//     }
//   }
// );

// export default createAppContainer(TasterFavTabNavigator);

import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import Colors from "../constants/Colors";
import { createDrawerNavigator } from "react-navigation-drawer";
import FiltersScreen from "../screens/FiltersScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
      headerTitle: "A Screen"
    }
  }
);

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTitleStyle: { fontFamily: "open-sans-bold" },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitle: "A Screen"
};

const FavoritesStackNavigator = createStackNavigator(
  {
    Favorites: FavouritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions
  }
);

const navOptions = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: () => {
      return {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
        tabBarColor: Colors.primaryColor
      };
    }
  },
  Favorites: {
    screen: FavoritesStackNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites!",
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.secondaryColor
    }
  }
};

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    defaultNavigationOptions
  }
);

const TasterFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(navOptions, {
        activeTintColor: Colors.primaryColor,
        shifting: true
      })
    : createBottomTabNavigator(navOptions, {
        tabBarOptions: {
          activeTintColor: Colors.primaryColor
        }
      });

const DrawerNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: TasterFavTabNavigator,
      navigationOptions: { drawerLabel: "Meals" }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.secondaryColor,
      labelStyle: { fontFamily: "open-sans-bold" }
    }
  }
);

export default createAppContainer(DrawerNavigator);
