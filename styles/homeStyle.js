import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  body: {
    flex: 3,
    flexDirection: "column",
  },
  nav: {
    marginTop: 30,
    height: 80,
    backgroundColor: "#2B3752",
  },
  navOrder: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    marginTop: 1,
  },
  title: {
    marginTop: 15,
    color: "#fff",
    fontSize: 40,
    textAlign: "center",
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
  container: {
    marginTop: 30,
    alignSelf: "center",
  },
  containerInner: {
    width: 350,
    height: 450,
    backgroundColor: "#F6E7D2",
    borderRadius: 5,
    paddingTop: 20,
  },
  containerInner1: {
    width: 350,
    height: 450,
    backgroundColor: "#2B3752",
    borderRadius: 5,
    paddingTop: 20,
    marginTop: 50,
  },
  btns: {
    marginLeft: 12,
    marginTop: 40,
    alignSelf: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons: {
    width: 107,
    height: 140,
    marginRight: 15,
    alignItems: "center",
    paddingTop: 8,
    backgroundColor: "#01B6AD",
    borderRadius: 5,
  },
  footerTextStyle: {
    marginTop: 20,
    fontSize: 20,
    alignSelf: "center",
  },
  footerlinkStyle: {
    color: "#0000CD",
    textDecorationLine: "underline",
  },
  temp: {
    fontSize: 30,
    marginBottom: 15,
    marginLeft: 15,
    marginTop: 5,
    alignSelf: "center",
    marginRight: 27,
  },
  infoTemp: {
    marginTop: 10,
    fontSize: 30,
    alignSelf: "center",
  },
  linha: {
    width: 260,
    height: 3,
    backgroundColor: "#000000",
    alignSelf: "center",
  },

  orderMoreInfo: {
    marginTop: 40,
  },
  moreInfo: {
    flex: 0,
    flexDirection: "row",
    marginLeft: 15,
    alignItems: "center",
    marginBottom: 30,
  },
  moreInfoTexts: {
    fontSize: 20,
    marginLeft: 10,
  },
});
