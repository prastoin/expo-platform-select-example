import GoogleMapReact from "google-map-react";
import React from "react";
import { MapFunctionComponent } from "./contract";

const WebMaps: MapFunctionComponent = ({ defaultMapCenterCoords }, _) => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultMapCenterCoords}
        defaultZoom={9}
      ></GoogleMapReact>
    </div>
  );
};

export default WebMaps;
