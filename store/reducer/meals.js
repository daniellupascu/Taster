import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTER } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      if (state.favoriteMeals.some(meal => meal.id === action.mealId)) {
        const newFavMeals = state.favoriteMeals.filter(
          meal => meal.id !== action.mealId
        );
        return { ...state, favoriteMeals: newFavMeals };
      } else {
        const addedMeal = state.meals.find(meal => meal.id === action.mealId);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(addedMeal)
        };
      }
    }
    case SET_FILTER: {
      const { filterSetting } = action;
      const newFilteredMeals = state.meals.filter(meal => {
        if (filterSetting.isGlutenFree && !meal.isGlutenFree) return false;
        if (filterSetting.isLactoseFree && !meal.isLactoseFree) return false;
        if (filterSetting.isVegetarian && !meal.isVegetarian) return false;
        if (filterSetting.isVegan && !meal.isVegan) return false;
        return meal;
      });
      return { ...state, filteredMeals: newFilteredMeals };
    }
    default:
      return state;
  }
};

export default mealsReducer;
