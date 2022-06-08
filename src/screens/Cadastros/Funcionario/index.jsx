import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Input } from '../../../components/Input'
import { styles } from './style'
import { Button } from '../../../components/Button'
import Modal from "react-native-modal";

function ModalFuncionario() {
  return (
    <View style={styles.containerModal}>

      <View>
        <Text>Nome do funcionário</Text>
        <Input />
      </View>

      <View>
        <Text>Número de CPF</Text>
        <Input />
      </View>

      <View>
        <Text>Número de RG</Text>
        <Input />
      </View>

      <Button title='Cadastrar funcionário' />
    </View>
  )
}


export function GerenciarFuncionario() {
  const [isModalVisible, setModalVisible] = useState(false)

  function handleOpenModal() {
    setModalVisible(true)
  }


  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ marginTop: 100 }}>
        <Text style={styles.textTitle}>Gerenciar funcionarios</Text>
        <Text style={styles.textSubTitle}>Aqui você pode criar, editar e deleter funcionarios</Text>
        <Button title='Cadastrar' onPress={handleOpenModal} />
      </View>

      <View>
        <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
          <ModalFuncionario />
        </Modal>
      </View>

    </View>
  )
}