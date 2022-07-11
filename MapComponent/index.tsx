/* eslint-disable @typescript-eslint/no-var-requires */
import { Platform } from "react-native";
import { MapFunctionComponent } from "./contract";

const MapComponent: MapFunctionComponent = Platform.select({
  native: () => require("./native").default,
  default: () => require("./web").default,
})();

export default MapComponent;

export * from "./contract";
