import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Input } from '../../components/Input'
import { styles } from './style'
import { Button } from '../../components/Button'

export function PaginaDoCliente() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ marginTop: 100 }}>
        <Text style={styles.textTitle}>Acompanhar seus pedidos</Text>
        <Text style={styles.textSubTitle}>Aqui voce pode acompanhar seus pedidos !</Text>
      </View>


      <View style={{ marginTop: 100 }}>

        <View>
          <Text>Informe o codigo de rastreio</Text>
          <Input />
        </View>

        <Button title='Pesquisar' />
      </View>
    </View>
  )
}