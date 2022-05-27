import React, {useState} from 'react'
import {View, Text,Image, Alert,ActivityIndicator} from 'react-native'
import {styles} from './style'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

export function SignIn(){
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const navigation = useNavigation()

  function handleLogin(){
    if(!email | !senha) {
      return Alert.alert('É necessário informar as suas credrênciais')
    }
    else{
      navigation.navigate('Home')
    }

  }


  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{`\n`}
          e organize suas{`\n`}
          cargas{`\n`}
        </Text>

        <View>
          <View>
            <Text>Email</Text>
            <Input onChangeText={event => setEmail(event) }/>
          </View>
          <Text>
          </Text>
          <View>
            <Text>Senha</Text>
            <Input onChangeText={event => setSenha(event)}/>
          </View>
          <Button title='Acessar' onPress={handleLogin}/>
        </View>
      </View>
    </View>
  )
}