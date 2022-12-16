import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  Linking,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "../styles/homeStyle";
// import { tempo } from "../scripts/paths";
export default Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const api = {
    key: "eece90fed20d88bcadbbf7e3014f845d",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric",
    lat: -8.052717031574272,
    long: -34.88514576886238,
  };

  // function tempo(data) {
  //   const tempo = {
  //     temp_min: data.main.temp_min,
  //     temp_max: data.main.temp_min,
  //     info_tempo: data.weather[0].description,
  //     cidade: data.name,
  //   };
  //   return tempo;
  // }

  // const time = tempo(data);

  const url = `${api.base}weather?lat=${api.lat}&lon=${api.long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`;

  const getClima = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getClima();
  });

  return (
    <ScrollView>
      <View style={styles.body}>
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
            <View style={styles.btnHome}>
              <Image
                source={require("../assets/icons8-página-inicial-100.png")}
                style={{ width: 45, height: 45 }}
              />
              <Text style={styles.title1}>HOME</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.containerInner}>
            <Image
              source={require("../assets/01d.png")}
              style={{
                width: 120,
                height: 100,
                alignSelf: "center",
                marginRight: 15,
              }}
            />
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <Text style={styles.temp}>
                ▼ {Math.round(30)}°c | ▲ {Math.round(30)}°c
              </Text>
            )}
            <View style={styles.linha} />
            <Text style={styles.infoTemp}>Sol</Text>
            <View style={styles.orderMoreInfo}>
              <View style={styles.moreInfo}>
                <Image
                  source={require("../assets/icons8-molhado-100.png")}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={styles.moreInfoTexts}> 0 mm </Text>
              </View>
              <View style={styles.moreInfo}>
                <Image
                  source={require("../assets/icons8-localização-100.png")}
                  style={{ width: 50, height: 50 }}
                />
                {isLoading ? (
                  <ActivityIndicator />
                ) : (
                  <Text style={styles.moreInfoTexts}>{data.name}, BR</Text>
                )}
              </View>
            </View>
          </View>
        </View>

        <View style={styles.btns}>
          {/*Botão de dicas */}

          <TouchableOpacity onPress={() => navigation.navigate("Dicas")}>
            <View style={styles.buttons}>
              <Image
                source={require("../assets/icons8-luz-acesa-100.png")}
                style={{ width: 100, height: 100 }}
              />
              <Text style={{ fontSize: 20, color: "#F6E7D2" }}>Dicas</Text>
            </View>
          </TouchableOpacity>

          {/*Botão de Contatos */}

          <TouchableOpacity onPress={() => navigation.navigate("Contatos")}>
            <View style={styles.buttons}>
              <Image
                source={require("../assets/icons8-livro-de-endereço-2-100.png")}
                style={{ width: 110, height: 100 }}
              />
              <Text style={{ fontSize: 20, color: "#F6E7D2" }}>Contatos</Text>
            </View>
          </TouchableOpacity>

          {/*Botão de Abrigos */}

          <TouchableOpacity onPress={() => navigation.navigate("Abrigos")}>
            <View style={styles.buttons}>
              <Image
                source={require("../assets/icons8-shelter-100.png")}
                style={{ width: 100, height: 100 }}
              />
              <Text
                style={{ fontSize: 20, color: "#F6E7D2", alignSelf: "center" }}
              >
                Abrigos
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.footerTextStyle}>
            Icones por{" "}
            <Text
              style={styles.footerlinkStyle}
              onPress={() => {
                Linking.openURL("https://icons8.com/");
              }}
            >
              Icons8
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
