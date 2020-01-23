import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = ({ children, style }) => (
  <Text style={{ ...styles.style, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  style: {
    fontFamily: "open-sans"
  }
});

export default DefaultText;
