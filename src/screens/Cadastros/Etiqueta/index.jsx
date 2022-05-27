import React from 'react'
import {View,Text} from 'react-native'
import {Input} from '../../../components/Input'
import {styles} from './style'
import {Button} from '../../../components/Button'

export function GerenciarEtiquetas(){
  return(
    <View style={{ flex: 1, alignItems: 'center'}}>
      <View style={{marginTop:100}}>
        <Text style={styles.textTitle}>Gerenciar etiquetas</Text>
        <Text style={styles.textSubTitle}>Aqui você pode criar, editar e deleter etiquetas</Text>
      </View>


      <View style={{marginTop:100}}>  
      
        <View>
          <Text>Inicial</Text>
          <Input/>
        </View>

        <View>
          <Text>Final</Text>
          <Input/>
        </View>

        <Button title='Cadastrar etiquetas'/>
      </View>
    </View>
  )
}