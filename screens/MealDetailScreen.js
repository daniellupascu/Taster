import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> THis is the meal detail</Text>
      <Button title="back home" onPress={() => props.navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailScreen;
