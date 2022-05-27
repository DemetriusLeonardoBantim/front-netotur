import React from 'react'
import { Pressable, View, Text,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {styles} from './style'


//Gerenciamento
import {GerenciarMotorista} from '../Cadastros/Motorista'
import {GerenciarCarro} from '../Cadastros/Carro'
import {GerenciaClientes} from '../Cadastros/Cliente'
import {GerenciarEtiquetas} from '../Cadastros/Etiqueta'

// Monitoramento
import {MonitorarCarga} from '../MonitorarCarga'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={styles.textTitle}>Página principal</Text>
      <Text style={styles.textSubTitle}>Aqui você pode controlar todo o fluxo da empresa</Text>
      <Image
        style={styles.computerImg}
        source={require('../../assets/computer.png')}
      />
       <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
      </Pressable>
    </View>
  );
}

const Drawer = createDrawerNavigator();


export function Home(){

  return(
    <NavigationContainer independent={true}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}  />
        <Drawer.Screen name="Gerenciar Motoristas" component={GerenciarMotorista} />
        <Drawer.Screen name="Gerenciar Clientes" component={GerenciaClientes} />
        <Drawer.Screen name="Gerenciar Carros" component={GerenciarCarro} />
        <Drawer.Screen name="Gerenciar Etiquetas" component={GerenciarEtiquetas} />
        <Drawer.Screen name="Monitorar cargas" component={MonitorarCarga} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}