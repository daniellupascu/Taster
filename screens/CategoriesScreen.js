import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Platform
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoriesScreen = props => {
  const renderGridItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.push("CategoryMeals", { categoryId: item.id });
        }}
      >
        <View style={styles.item}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Categories"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
