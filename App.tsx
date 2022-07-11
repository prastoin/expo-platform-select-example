import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapComponent from "./MapComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapComponent
        positionConstraintPosition={{
          lat: 48.866667,
          lng: 2.333333,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
