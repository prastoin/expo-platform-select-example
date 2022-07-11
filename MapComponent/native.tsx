import React from "react";
import MapView from "react-native-maps";
import { MapFunctionComponent } from "./contract";

const NativeMaps: MapFunctionComponent = ({ positionConstraintPosition }) => {
  return (
    <MapView
      initialRegion={{
        latitude: positionConstraintPosition.lat,
        longitude: positionConstraintPosition.lng,
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
