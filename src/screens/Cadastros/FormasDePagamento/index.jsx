import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Input } from '../../../components/Input'
import { styles } from './style'
import { Button } from '../../../components/Button'
import Modal from "react-native-modal";

function ModalFormasDePagamento() {
  return (
    <View style={styles.containerModal}>

      <View>
        <Text>Forma de pagamento</Text>
        <Input />
      </View>

      <Button title='Cadastrar forma de pagamento' />
    </View>
  )
}



export function GerenciarFormasDePagamento() {
  const [isModalVisible, setModalVisible] = useState(false)

  function handleOpenModal() {
    setModalVisible(true)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ marginTop: 100 }}>
        <Text style={styles.textTitle}>Gerenciar carros</Text>
        <Text style={styles.textSubTitle}>Aqui você pode criar, editar e deleter carros</Text>
        <Button title='Cadastrar' onPress={handleOpenModal} />
      </View>

      <View>
        <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
          <ModalFormasDePagamento />
        </Modal>
      </View>

    </View>
  )
}