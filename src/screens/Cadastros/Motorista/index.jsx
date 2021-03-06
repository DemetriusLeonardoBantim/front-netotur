import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Input } from '../../../components/Input'
import { styles } from './style'
import { Button } from '../../../components/Button'
import Modal from "react-native-modal";

function ModalMotorista() {
  return (
    <View style={styles.containerModal}>
      <View>
        <Text>Nome</Text>
        <Input />
      </View>

      <View>
        <Text>CPF</Text>
        <Input />
      </View>

      <View>

        <Text>Placa</Text>
        <Input />
      </View>
      <Button title='Cadastrar motorista' />
    </View>
  )
}

export function GerenciarMotorista() {
  const [isModalVisible, setModalVisible] = useState(false)

  function handleOpenModal() {
    setModalVisible(true)
  }
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ marginTop: 100 }}>
        <Text style={styles.textTitle}>Gerenciar motoristas</Text>
        <Text style={styles.textSubTitle}>Aqui você pode criar, editar e deleter motoristas</Text>
        <Button title='Cadastrar' onPress={handleOpenModal} />
      </View>

      <View>
        <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
          <ModalMotorista />
        </Modal>
      </View>
    </View>
  )
}