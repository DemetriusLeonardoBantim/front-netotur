import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Input } from '../../../components/Input'
import { styles } from './style'
import { Button } from '../../../components/Button'



import Modal from "react-native-modal";

function ModalEtiqueta() {
  return (
    <View style={styles.containerModal}>

      <View>
        <Text>Inicial</Text>
        <Input />
      </View>

      <View>
        <Text>Final</Text>
        <Input />
      </View>

      <Button title='Cadastrar etiquetas' />
    </View>
  )
}


export function GerenciarEtiquetas() {
  const [isModalVisible, setModalVisible] = useState(false)

  function handleOpenModal() {
    setModalVisible(true)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ marginTop: 100 }}>
        <Text style={styles.textTitle}>Gerenciar etiquetas</Text>
        <Text style={styles.textSubTitle}>Aqui você pode criar, editar e deleter etiquetas</Text>
        <Button title='Cadastrar' onPress={handleOpenModal} />
      </View>

      <View>
        <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
          <ModalEtiqueta />
        </Modal>
      </View>

    </View>
  )
}