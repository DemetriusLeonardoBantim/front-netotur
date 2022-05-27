import React from 'react'
import {Text, Image, View, TouchableOpacity} from 'react-native'
import {styles} from './styles'

export function Button({title, ...rest}){
  return(
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}