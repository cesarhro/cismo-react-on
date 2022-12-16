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
  function bloco1() {
    Linking.openURL("https://goo.gl/maps/ddRnuu72M61N34Kx6");
  }
  function bloco2() {
    Linking.openURL("https://goo.gl/maps/13YnhxAXS1B1hsYdA");
  }
  function bloco3() {
    Linking.openURL("https://goo.gl/maps/h3nMEVmTZBvbKW319");
  }
  function bloco4() {
    Linking.openURL("https://goo.gl/maps/vRvHjxtsfU6fsomw7");
  }
  function bloco5() {
    Linking.openURL("https://goo.gl/maps/k5UueWj8DYarTwAj9");
  }
  function bloco6() {
    Linking.openURL("https://goo.gl/maps/dyFfytA76jcKvzK97");
  }
  function bloco7() {
    Linking.openURL("https://goo.gl/maps/ULWUoVhR316SjiAy6");
  }
  function bloco8() {
    Linking.openURL("https://goo.gl/maps/Mi5RFF5iKuA48KyJ7");
  }
  function bloco9() {
    Linking.openURL("https://goo.gl/maps/9gFFgrCXuzGZDBFp6");
  }
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
          <Text style={styles.titulo}>Escola Municipal Ricardo Gama</Text>
          <Text style={styles.conteudo}>
            R. Guaíra, 148 - Linha do Tiro, Recife - PE, 52131-210
          </Text>
          <Text style={styles.conteudo}>Telefone: (81)3355-3690</Text>
          <TouchableOpacity onPress={bloco1} style={styles.button}>
            <Text style={styles.textoRota}>Traçar Rota</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>Igreja Batista Córrego do Tiro</Text>
          <Text style={styles.conteudo}>
            R. Prof. José Amarino dos Réis, 392 - Água Fria, Recife - PE,
            52211-151
          </Text>
          <Text style={styles.conteudo}>Telefone: (81)3304-2382</Text>
          <TouchableOpacity onPress={bloco2} style={styles.button}>
            <Text style={styles.textoRota}>Traçar Rota</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>Paróquia Nossa Sra. dos Remédios</Text>
          <Text style={styles.conteudo}>
            Estr. dos Remédios, 1603 - Afogados, Recife - PE, 50750-000
          </Text>
          <Text style={styles.conteudo}>Telefone: (81)3428-7650</Text>
          <TouchableOpacity onPress={bloco3} style={styles.button}>
            <Text style={styles.textoRota}>Traçar Rota</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>
            Centro de Apoio Social Esportivo e Cultural do Ibura
          </Text>
          <Text style={styles.conteudo}>Ibura, Recife - PE, 51210-902</Text>
          <TouchableOpacity onPress={bloco4} style={styles.button}>
            <Text style={styles.textoRota}>Traçar Rota</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>
            Escola Municipal Poeta Paulo Bandeira da Cruz
          </Text>
          <Text style={styles.conteudo}>
            R. Panelas, s/n - COHAB - Recife - PE, 51340-600
          </Text>
          <TouchableOpacity onPress={bloco5} style={styles.button}>
            <Text style={styles.textoRota}>Traçar Rota</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>Escola Municipal Adauto Pontes</Text>
          <Text style={styles.conteudo}>
            R. Sertânia, 35 - Jordão Alto, Recife - PE, 51260-390
          </Text>
          <TouchableOpacity style={[styles.button, styles.buttonRotaNDisp]}>
            <Text style={styles.textoRota}>Rota Não Disponível</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>Escola Municipal 27 de Novembro</Text>
          <Text style={styles.conteudo}>
            Av. Doze de Junho, 1120 - COHAB, Recife - PE, 51345-000
          </Text>
          <Text style={styles.conteudo}>Telefone: (81)99461-4971</Text>
          <TouchableOpacity onPress={bloco6} style={styles.button}>
            <Text style={styles.textoRota}>Traçar Rota</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>
            Escola Municipal Maria de Sampaio Lucena
          </Text>
          <Text style={styles.conteudo}>
            Av. Pernambuco - COHAB, Recife - PE, 51280-000
          </Text>
          <TouchableOpacity onPress={bloco7} style={styles.button}>
            <Text style={styles.textoRota}>Traçar Rota</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>Igreja Orai</Text>
          <Text style={styles.conteudo}>Endereço: R. Tucumã, 127 - Ibura</Text>
          <TouchableOpacity style={[styles.button, styles.buttonRotaNDisp]}>
            <Text style={styles.textoRota}>Rota Não Disponível</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>Associação Asa Branca</Text>
          <Text style={styles.conteudo}>
            Travessa Benigno Jordão de Vasconcelos, n 41, Lagoa Encantada
          </Text>
          <TouchableOpacity onPress={bloco8} style={styles.button}>
            <Text style={styles.textoRota}>Traçar Rota</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>Igreja Batista do Caçote</Text>
          <Text style={styles.conteudo}>
            R. Dona Ana Aurora, 2042 - Areias, Recife - PE,
          </Text>
          <Text style={styles.conteudo}>Telefone: (81)3455-1864</Text>
          <TouchableOpacity onPress={bloco9} style={styles.button}>
            <Text style={styles.textoRota}>Traçar Rota</Text>
          </TouchableOpacity>
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
