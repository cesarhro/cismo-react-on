import React, { Component } from "react";
import {
  Platform,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "../components/header";

class Accordion_Panel extends Component {
  constructor() {
    super();

    this.state = {
      updated_Height: 0,
    };
  }

  componentWillReceiveProps(update_Props) {
    if (update_Props.item.expanded) {
      this.setState(() => {
        return {
          updated_Height: null,
        };
      });
    } else {
      this.setState(() => {
        return {
          updated_Height: 0,
        };
      });
    }
  }

  shouldComponentUpdate(update_Props, nextState) {
    if (update_Props.item.expanded !== this.props.item.expanded) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <View style={styles.Panel_Holder}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.props.onClickFunction}
          style={styles.Btn}
        >
          <Text style={styles.Panel_Button_Text}>{this.props.item.title} </Text>
        </TouchableOpacity>

        <View style={{ height: this.state.updated_Height, overflow: "hidden" }}>
          <Text style={styles.Panel_text}>{this.props.item.body}</Text>
        </View>
      </View>
    );
  }
}

export default class Dicas extends Component {
  constructor() {
    super();

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const array = [
      {
        expanded: false,
        title: "Dica 1",
        body: "Plante grama e capim nas encostas do terreno. As raízes penetram no solo, evitando assim seu desmoronamento.",
      },
      {
        expanded: false,
        title: "Dica 2",
        body: "Nunca construa próximo a barrancos. Quanto maior for a distância que você deixar, maior será a segurança para a sua moradia.",
      },
      {
        expanded: false,
        title: "Dica 3",
        body: "Sabia que o lixo jogado nas encostas acumula água? Isso vai deixá-lo mais pesado e, se escorregar, vai arrastar o solo junto com ele.",
      },
      {
        expanded: false,
        title: "Dica 4",
        body: "Evite também cortes e aterros nas encostas para não enfraquecer o terreno.",
      },
      {
        expanded: false,
        title: "Dica 5",
        body: "Sabia que o lixo jogado nas encostas acumula água? Isso vai deixá-lo mais pesado e, se escorregar, vai arrastar o solo junto com ele.",
      },
      {
        expanded: false,
        title: "Dica 6",
        body: "Nunca jogue água de pia, tanque ou chuveiro nas encostas. Além de ser errado e contaminar o solo, umedece a área e aumenta o risco de deslizamento.",
      },
      {
        expanded: false,
        title: "Dica 7",
        body: "O melhor a fazer para a prevenção é instalar canaletas ou tubos para o escoamento dessas águas usadas.",
      },
    ];

    this.state = { AccordionData: [...array] };
  }

  update_Layout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = this.state.AccordionData.map((item) => {
      const newItem = Object.assign({}, item);

      newItem.expanded = false;

      return newItem;
    });

    array[index].expanded = true;

    this.setState(() => {
      return {
        AccordionData: array,
      };
    });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Header />
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}
        >
          {this.state.AccordionData.map((item, key) => (
            <Accordion_Panel
              key={key}
              onClickFunction={this.update_Layout.bind(this, key)}
              item={item}
            />
          ))}
        </ScrollView>
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
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },

  Panel_text: {
    fontSize: 18,
    color: "#000",
    padding: 10,
    backgroundColor: "#f6e7d2",
    textAlign: "center",
  },

  Panel_Button_Text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 21,
  },

  Panel_Holder: {
    marginVertical: 5,
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 10,
  },

  Btn: {
    padding: 10,
    backgroundColor: "#01b6ad",
    borderWidth: 1,
    borderColor: "#008080",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
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
  footerTextStyle: {
    marginTop: 20,
    fontSize: 20,
    alignSelf: "center",
  },
  footerlinkStyle: {
    color: "#0000CD",
    textDecorationLine: "underline",
  },
});
