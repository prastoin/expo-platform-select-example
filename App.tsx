import { StatusBar } from "expo-status-bar";
import GoogleMapReact from "google-map-react";
import * as React from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

export default function App() {
  const platformIsWeb = Platform.OS === "web";

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {platformIsWeb ? (
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "dev" }}
            defaultCenter={{ lat: 0, lng: 0 }}
            defaultZoom={1}
          ></GoogleMapReact>
        </div>
      ) : (
        <MapView style={styles.map} />
      )}
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
