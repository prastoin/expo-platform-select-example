import * as React from "react";
import { SafeAreaView } from "react-native";
import MapComponent from "./MapComponent";

export default function App() {
  const defaultMapCenterCoords = {
    lat: 48.866667,
    lng: 2.333333,
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MapComponent defaultMapCenterCoords={defaultMapCenterCoords} />
    </SafeAreaView>
  );
}
