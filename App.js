import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./app/components/screens/Login";
import Register from "./app/components/screens/Register";
import Password from "./app/components/screens/Password";

const Stack = createNativeStackNavigator();

//declarando o componente como função
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="password" component={Password} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}