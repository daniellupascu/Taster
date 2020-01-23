export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTER = "SET_FILTER";

export const toggleFavorite = mealId => {
  return { type: TOGGLE_FAVORITE, mealId };
};

export const setFilters = filterSetting => {
  return { type: SET_FILTER, filterSetting };
};
