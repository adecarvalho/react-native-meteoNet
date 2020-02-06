import React from "react"
import { View, StyleSheet, TouchableOpacity, Text } from "react-native"

import { MaterialIcons } from "@expo/vector-icons"

import colors from "../theme/colors"

//
const AddFavoriteBtn = ({ onAddFavoriteHandler, favoriteState }) => {
  //
  const addFavoriteHandler = () => {
    //
    onAddFavoriteHandler()
  }

  //
  return (
    <View>
      <Text style={styles.messageError}>{favoriteState.error}</Text>
      <TouchableOpacity onPress={addFavoriteHandler} style={styles.btn}>
        <MaterialIcons
          name="playlist-add"
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
  },
  messageError: {
    color: "#fff",
    fontSize: 20
  }
})

export default AddFavoriteBtn
