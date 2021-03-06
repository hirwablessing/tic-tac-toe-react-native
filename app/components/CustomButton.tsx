import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "../../utils/types";

export default function CustomButton({
  bgColor,
  buttonVh,
  buttonVw,
  buttonPadding,
  buttonWidth,
  buttonHeight,
  buttonBorderWidth,
  buttonRadius,
  title,
  buttonBorderColor,
  btnTextColor,
  onPress,
}: ButtonProps) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: bgColor,
      marginVertical: buttonVh,
      marginHorizontal: buttonVw,
      padding: buttonPadding,
      width: buttonWidth,
      height: buttonHeight,
      borderWidth: buttonBorderWidth,
      borderRadius: buttonRadius,
      borderColor: buttonBorderColor || "transparent",
      alignItems: "center",
      justifyContent: "center",
      // ? colors[buttonBorderColor]
      // : "transparent",
    },

    buttonTextColor: {
      color: btnTextColor ? btnTextColor : "#000",
      alignSelf: "center",
      fontSize: 17,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonTextColor}>{title}</Text>
    </TouchableOpacity>
  );
}
