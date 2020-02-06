import React from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import colors from "../theme/colors"

//
const ReloadButton = ({ onReloadHandler }) => {
  //
  const onPressHandler = () => {
    onReloadHandler()
  }
  //
  return (
    <View>
      <TouchableOpacity onPress={onPressHandler} style={styles.btn}>
        <MaterialIcons
          name="autorenew"
          size={48}
          color={colors.iconDefault}
        ></MaterialIcons>
      </TouchableOpacity>
    </View>
  )
}

//
const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
    alignSelf: "center"
  }
})

export default ReloadButton
