import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'

export function Relatorios() {
  return (
    <View>
      <Text style={styles.textTitle}>Aqui voce pode acompnhar os relatorios</Text>

      <View>
        <Text>Relatorios do mes de junho de 2022</Text>
      </View>
    </View>
  )
}