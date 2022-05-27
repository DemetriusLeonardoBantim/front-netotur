import React from 'react'
import {View,Text} from 'react-native'
import {Input} from '../../../components/Input'
import {styles} from './style'
import {Button} from '../../../components/Button'

export function GerenciarCarro(){
  return(
    <View style={{ flex: 1, alignItems: 'center'}}>
      <View style={{marginTop:100}}>
        <Text style={styles.textTitle}>Gerenciar carros</Text>
        <Text style={styles.textSubTitle}>Aqui você pode criar, editar e deleter carros</Text>
      </View>


      <View style={{marginTop:100}}>  

        <View>
          <Text>Placa</Text>
          <Input/>
        </View>

        <View>
          <Text>Agência</Text>
          <Input/>
        </View>

        <Button title='Cadastrar carros'/>
      </View>
    </View>
  )
}