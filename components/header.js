import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default Header = ({ navigation }) => {
  return (
    <View>
      <View style={styles.nav}>
        <View style={styles.navOrder}>
          <View style={styles.logo}>
            <Image
              source={require("../assets/logo.png")}
              style={{ width: 80, height: 80 }}
            />
          </View>
          <View>
            <Text style={styles.title}>CISMO</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2b3752",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 15,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  textoCentro: {
    fontSize: 28,
    color: "#FFF",
    fontWeight: "400",
  },
  imagem: {
    color: "#FFF",
    width: 40,
    height: 40,
  },
  textoUser: {
    color: "#FFF",
  },
  buttonUser: {
    width: 50,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#01b6ad",
  },
  nav: {
    height: 80,
    backgroundColor: "#2B3752",
  },
  navOrder: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginTop: 15,
    color: "#fff",
    fontSize: 40,
    textAlign: "center",
    marginRight: 130,
  },
  title1: {
    color: "#F6E7D2",
    fontSize: 15,
    textAlign: "center",
  },
  btnHome: {
    width: 80,
    height: 80,
    padding: 9,
    alignItems: "center",
    backgroundColor: "#01B6AD",
  },
});
