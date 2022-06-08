import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignIn'
import { Home } from '../screens/Home'
import { GerenciarMotorista } from '../screens/Cadastros/Motorista'
import { InitialPage } from '../screens/InitalPage'
import { PaginaDoCliente } from '../screens/ClientPage'

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: 'transparent' },
      }}
      initialRouteName="InitialPage"
    >
      <Stack.Screen name='InitialPage' component={InitialPage} />
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='GerenciarMotorista' component={GerenciarMotorista} />
      <Stack.Screen name='PaginaDoCliente' component={PaginaDoCliente} />
    </Stack.Navigator>
  )
}