import React from 'react'
import {View,Text} from 'react-native'
import {Input} from '../../../components/Input'
import {styles} from './style'
import {Button} from '../../../components/Button'

export function GerenciarMotorista(){
  return(
    <View style={{ flex: 1, alignItems: 'center'}}>
      <View style={{marginTop:100}}>
        <Text style={styles.textTitle}>Gerenciar motoristas</Text>
        <Text style={styles.textSubTitle}>Aqui você pode criar, editar e deleter motoristas</Text>
      </View>


      <View style={{marginTop:100}}>  
        <View>
          <Text>Nome</Text>
          <Input/>
        </View>

        <View>
          <Text>CPF</Text>
          <Input/>
        </View>

        <View>

          <Text>Placa</Text>
          <Input/>
        </View>
        <Button title='Cadastrar motorista'/>
      </View>
    </View>
  )
}