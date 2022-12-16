import { View, Text, TouchableOpacity, Image } from "react-native";
import { requestLocationPermission } from "../scripts/permissionLocate";
import { styles } from "../styles/homeStyle";

export default function Init({ navigation }) {
  const nav = () => {
    navigation.navigate("Home");
  };

  const functions = () => {
    nav();
    requestLocationPermission();
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.containerInner1}>
          <Image
            source={require("../assets/logo.png")}
            style={{
              width: 120,
              height: 100,
              alignSelf: "center",
              marginRight: 15,
              marginLeft: 15,
              marginTop: 50,
            }}
          />

          <Text style={{ color: "#F6E7D2", fontSize: 40, alignSelf: "center" }}>
            CISMO
          </Text>

          <TouchableOpacity onPress={functions}>
            <View
              style={{
                width: 300,
                height: 50,
                backgroundColor: "#01B6AD",
                alignSelf: "center",
                marginTop: 70,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 25,
                  marginTop: 6,
                  alignSelf: "center",
                }}
              >
                Acessar o CISMO
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
