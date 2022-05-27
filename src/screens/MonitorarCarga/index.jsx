import React from 'react'
import {View,Text} from 'react-native'
import {Input} from '../../components/Input'
import {styles} from './style'
import {Button} from '../../components/Button'

export function MonitorarCarga(){
  return(
    <View style={{ flex: 1, alignItems: 'center'}}>
      <View style={{marginTop:50}}>
        <Text style={styles.textTitle}>Aqui você pode rastrear suas cargas</Text>
      </View>


      <View style={{marginTop:20}}>  

        <View>
          <Text>Informe o código de rastreio</Text>
          <Input/>
          <Button title='Rastrear pacote'/>
        </View>

      </View>
    </View>
  )
}