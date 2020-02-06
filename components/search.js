import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native"

import { MaterialIcons } from "@expo/vector-icons"

import colors from "../theme/colors"

//
const Search = ({ getCityHandler }) => {
  const [city, setCity] = useState("")

  const inputTextHander = txt => {
    setCity(txt)
  }

  const submitHander = () => {
    getCityHandler(city)
    setCity("")
    Keyboard.dismiss()
  }

  //
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Saisir une ville"
        placeholderTextColor={colors.primary}
        autoCapitalize="words"
        autoCorrect={true}
        value={city}
        onChangeText={inputTextHander}
        onSubmitEditing={submitHander}
      ></TextInput>

      <TouchableOpacity style={styles.button} onPress={submitHander}>
        <MaterialIcons
          style={styles.icon}
          name="search"
          size={30}
        ></MaterialIcons>
      </TouchableOpacity>
    </View>
  )
}

//
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
    height: 50
  },
  input: {
    flex: 1,

    marginHorizontal: 10,
    padding: 5,
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  button: {
    backgroundColor: colors.light,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    width: "20%",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    alignSelf: "center"
  }
})

export default Search
