import React, { ReactElement } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

interface Props {
  id: number;
  selected?: any;
  onClick: any;
}

export default function Square({ id, selected, onClick }: Props): ReactElement {
  return (
    <TouchableWithoutFeedback onPress={() => onClick(id)}>
      <View style={styles.square}>
        {selected === 1 ? (
          <Text style={styles.x}>X</Text>
        ) : selected === 2 ? (
          <Text style={styles.circle}>.</Text>
        ) : (
          <Text></Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 80,
  },
  circle: {
    backgroundColor: "#FE805C",
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  x: {
    color: "#FE805C",
    fontSize: 40,
    fontWeight: "800",
  },
});
