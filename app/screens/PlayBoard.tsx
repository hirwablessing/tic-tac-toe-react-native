import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function PlayBoard() {
  return (
    <View style={styles.container}>
      <CustomButton
        bgColor={"#FFF"}
        buttonVh={"30%"}
        buttonVw={"7%"}
        buttonPadding={15}
        buttonWidth={395}
        buttonHeight={109}
        buttonBorderWidth={2}
        buttonRadius={24}
        title={"Turn"}
        onPress={() => console.log("here")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAEFE3",
  },
});
