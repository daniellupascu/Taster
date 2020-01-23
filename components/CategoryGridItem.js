import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from "react-native";

const CategoryGridItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version > 21)
    TouchableCmp = TouchableNativeFeedback;

  return (
    <View style={styles.item}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onPress}>
        <View
          style={{ ...styles.categoryContainer, backgroundColor: props.color }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 15,
    flex: 1,
    height: 150,
    borderRadius: 10,
    elevation: 4,
    overflow: "hidden"
  },
  categoryContainer: {
    flex: 1,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "right"
  }
});

export default CategoryGridItem;
