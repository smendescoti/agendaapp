import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./app/components/screens/Login";
import Register from "./app/components/screens/Register";
import Password from "./app/components/screens/Password";
import CadastroContatos from "./app/components/screens/CadastroContatos";
import ConsultaContatos from "./app/components/screens/ConsultaContatos";
import EdicaoContatos from "./app/components/screens/EdicaoContatos";
import ExclusaoContatos from "./app/components/screens/ExclusaoContatos";

const Stack = createNativeStackNavigator();

//declarando o componente como função
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="password" component={Password} />
        <Stack.Screen name="cadastro-contatos" component={CadastroContatos} />
        <Stack.Screen name="consulta-contatos" component={ConsultaContatos} />
        <Stack.Screen name="edicao-contatos" component={EdicaoContatos} />
        <Stack.Screen name="exclusao-contatos" component={ExclusaoContatos} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}