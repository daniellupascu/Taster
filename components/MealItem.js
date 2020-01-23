import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground
} from "react-native";
import DefaultText from "./DefaultText";

const MealItem = ({ meal, onPress }) => {
  return (
    <View style={styles.meal}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.mealWrapper}>
          <View style={{ ...styles.row, ...styles.mealHeader }}>
            <ImageBackground
              style={styles.mealImage}
              source={{ uri: meal.imageUrl }}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.mealTitle}>{meal.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.mealDetails }}>
            <DefaultText>{meal.duration}m</DefaultText>
            <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  meal: {
    height: 200,
    // width: "100%",
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: "hidden"
  },
  mealWrapper: {
    height: "100%",
    width: "100%",
    backgroundColor: "#E7ECEF"
  },
  mealImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 5
  },
  mealTitle: {
    fontSize: "open-sans-bold",
    fontSize: 22,
    color: "white",
    textAlign: "center"
  },
  row: {
    flexDirection: "row"
  },
  mealHeader: {
    height: "85%"
  },
  mealDetails: {
    height: "15%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default MealItem;
