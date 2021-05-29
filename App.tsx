import React from "react";
import { StyleSheet, View } from "react-native";
import PlayBoard from "./app/screens/PlayBoard";

export default function App() {
  return (
    <View style={styles.container}>
      <PlayBoard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAEFE3",
    alignItems: "center",
    justifyContent: "center",
  },
});
