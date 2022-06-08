import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Input } from '../../../components/Input'
import { styles } from './style'
import { Button } from '../../../components/Button'
import Modal from "react-native-modal";

function ModalAgencia() {
  return (
    <View style={styles.containerModal}>
      <View>
        <Text>Nome da agencia</Text>
        <Input />
      </View>

      <Button title='Cadastrar agencia' />
    </View>
  )
}


export function GerenciarAgencias() {
  const [isModalVisible, setModalVisible] = useState(false)

  function handleOpenModal() {
    setModalVisible(true)
  }


  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ marginTop: 100 }}>
        <View>
          <View>
            <Text style={styles.textTitle}>Gerenciar agencias</Text>
            <Text style={styles.textSubTitle}>Aqui você pode criar, editar e deleter agencias</Text>
          </View>
          <View>
            <Button title='Cadastrar' onPress={handleOpenModal} />
          </View>
        </View>
      </View>

      <View>
        <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
          <ModalAgencia />
        </Modal>
      </View>


      <View style={styles.containerInformation} >
        <Text>Nome da agencia: Agencia Juazeiro do Norte ❌</Text>
        <Text>Data de criacao: 14/09/1998</Text>
      </View>
    </View>
  )
}