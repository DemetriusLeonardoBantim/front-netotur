import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '../screens/SignIn'
import {Home} from '../screens/Home'
import {GerenciarMotorista} from '../screens/Cadastros/Motorista'

const Stack = createNativeStackNavigator();

export function AppRoutes(){
  return( 
    <Stack.Navigator 
      screenOptions={{
        headerShown:false,
        headerStyle: { backgroundColor: 'transparent' },
      }}
      initialRouteName="SignIn"
    >
      <Stack.Screen name='SignIn' component={SignIn}/>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='GerenciarMotorista' component={GerenciarMotorista}/>
    </Stack.Navigator>
  )
}