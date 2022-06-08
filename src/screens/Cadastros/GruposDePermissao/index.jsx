import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Input } from '../../../components/Input'
import { styles } from './style'
import { Button } from '../../../components/Button'
import Modal from "react-native-modal";

function ModalGrupoPermissao() {
  return (

    <View style={styles.containerModal}>

      <View>
        <Text>Grupo permissao</Text>
        <Input />
      </View>

      <Button title='Cadastrar grupo permissão' />
    </View>
  )
}


export function GerenciarGruposDePermissao() {
  const [isModalVisible, setModalVisible] = useState(false)

  function handleOpenModal() {
    setModalVisible(true)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ marginTop: 100 }}>
        <Text style={styles.textTitle}>Gerenciar grupos permissao</Text>
        <Text style={styles.textSubTitle}>Aqui você pode criar, editar e deleter grupos permissao</Text>
        <Button title='Cadastrar' onPress={handleOpenModal} />
      </View>


      <View>
        <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
          <ModalGrupoPermissao />
        </Modal>
      </View>

    </View>
  )
}