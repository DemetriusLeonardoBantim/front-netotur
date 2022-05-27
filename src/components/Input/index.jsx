import React from "react";
import { styles } from "./styles";
import { TextInput} from "react-native";

export function Input({...rest}) {
  return (
    <TextInput {...rest} style={styles.container} keyboardType="default" />
  );
}