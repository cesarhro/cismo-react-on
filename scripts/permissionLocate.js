import { PermissionsAndroid } from "react-native";

export const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Localização ativada");
    } else {
      console.log("Localização negada");
    }
  } catch (err) {
    console.warn(err);
  }
};
