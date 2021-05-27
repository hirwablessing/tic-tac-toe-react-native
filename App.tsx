import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlayBoard from "./app/screens/PlayBoard";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
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
