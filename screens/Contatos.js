import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ScrollView,
  Image,
} from "react-native";

export default Abrigos = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.nav}>
          <View style={styles.navOrder}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <View style={styles.logo}>
                <Image
                  source={require("../assets/logo.png")}
                  style={{ width: 80, height: 80 }}
                />
              </View>
            </TouchableOpacity>
            <View>
              <Text style={styles.title}>CISMO</Text>
            </View>
            <TouchableOpacity
              style={styles.btnHome}
              onPress={() => navigation.navigate("Home")}
            >
              <View>
                <Image
                  source={require("../assets/icons8-página-inicial-100.png")}
                  style={{ width: 45, height: 45 }}
                />
                <Text style={styles.title1}>HOME</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bloco}>
          <Text style={styles.titulo}>Defesa Civil</Text>
          <Text style={styles.conteudo}>Telefone: 0800 081 3400</Text>
          <TouchableOpacity
            onPress={Linking.canOpenURL(`tel:08000813400`)}
            style={styles.button}
          >
            <Text style={styles.textoRota}>Ligar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>Bombeiros</Text>
          <Text style={styles.conteudo}>Telefone: 193</Text>
          <TouchableOpacity
            onPress={Linking.canOpenURL(`tel:193`)}
            style={styles.button}
          >
            <Text style={styles.textoRota}>Ligar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bloco}>
          <Text style={styles.titulo}>SAMU</Text>
          <Text style={styles.conteudo}>Telefone: 192</Text>
          <TouchableOpacity
            onPress={Linking.canOpenURL(`tel:192`)}
            style={styles.button}
          >
            <Text style={styles.textoRota}>Ligar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>César </Text>
          <Text style={styles.conteudo}>Telefone: 81991013845</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={Linking.canOpenURL(`tel:81991013845`)}
          >
            <Text style={styles.textoRota}>Ligar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blocoCadastro}>
          <Image
            source={require("../assets/icons8-mais-100.png")}
            style={{ width: 100, height: 100 }}
          ></Image>

          <Text style={styles.textoCadastro}>Adicionar Contato</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 15,
    textAlign: "center",
  },
  conteudo: {
    paddingBottom: 8,
    textAlign: "center",
  },
  bloco: {
    width: 350,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6e7d2",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#f5deb3",
    paddingRight: 20,
    paddingLeft: 20,
  },
  blocoCadastro: {
    width: 350,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#f5deb3",
    paddingRight: 20,
    paddingLeft: 20,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#01b6ad",
    borderColor: "#008080",
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
  },
  textoRota: {
    color: "#FFF",
  },
  textoCadastro: {
    color: "#000000",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonRotaNDisp: {
    width: 150,
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
});
