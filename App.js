import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Abrigos from "./screens/Abrigos";
import Init from "./screens/Init";
import header from "./components/header";
import Contatos from "./screens/Contatos";
import Dicas from "./screens/Dicas";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerTitle: "" }}
          name="Init"
          component={Init}
        />
        <Stack.Screen
          options={{
            headerTitle: "",
            headerBackVisible: false,
            headerTransparent: true,
          }}
          name="Home"
          component={Home}
        />

        <Stack.Screen options={{}} name="Dicas" component={Dicas} />
        <Stack.Screen
          options={{
            headerTitle: "",
            headerBackVisible: false,
            headerTransparent: true,
          }}
          name="Abrigos"
          component={Abrigos}
        />
        <Stack.Screen
          options={{
            headerTitle: "",
            headerBackVisible: false,
            headerTransparent: true,
          }}
          name="Contatos"
          component={Contatos}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
