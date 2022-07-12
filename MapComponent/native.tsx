import React from "react";
import MapView from "react-native-maps";
import { MapFunctionComponent } from "./contract";

const NativeMaps: MapFunctionComponent = ({ defaultMapCenterCoords }) => {
  return (
    <MapView
      initialRegion={{
        latitude: defaultMapCenterCoords.lat,
        longitude: defaultMapCenterCoords.lng,
        // See https://stackoverflow.com/questions/50882700/react-native-mapview-what-is-latitudedelta-longitudedelta
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
      provider={"google"}
    />
  );
};

export default NativeMaps;
