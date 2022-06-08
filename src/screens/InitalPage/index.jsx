import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'

export function InitialPage() {
  const navigation = useNavigation()


  function handleEmploy() {
    console.log(`oi`)
    navigation.navigate('SignIn')
  }

  function handleClient() {
    navigation.navigate('PaginaDoCliente')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como deseja acessar nossa pagina: </Text>
      <View>
        <TouchableOpacity style={styles.containerButton} onPress={handleClient}>
          <Text style={styles.titleButton}>
            Cliente
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerButton} onPress={handleEmploy}>
          <Text style={styles.titleButton}>
            Colaborador
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}