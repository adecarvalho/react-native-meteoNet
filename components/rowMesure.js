import React from "react"
import { View, Text, StyleSheet } from "react-native"

import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from "../theme/colors"

//
const showIcon = type => {
  switch (type) {
    case "Humidite":
      return (
        <MaterialCommunityIcons
          name="water"
          size={20}
          color={colors.primary}
        ></MaterialCommunityIcons>
      )
    //
    case "Pression":
      return (
        <MaterialCommunityIcons
          name="speedometer"
          size={20}
          color={colors.primary}
        ></MaterialCommunityIcons>
      )
    //
    case "Vent":
      return (
        <MaterialCommunityIcons
          name="weather-windy"
          size={20}
          color={colors.primary}
        ></MaterialCommunityIcons>
      )
    //
    default:
      return null
  }
}

//
const RowMesure = ({ type, value, unite }) => {
  return (
    <View style={styles.container}>
      {showIcon(type)}
      <Text>{type}</Text>
      <Text>{value}</Text>
      <Text>{unite}</Text>
    </View>
  )
}

//
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "30%"
  },
  type: {
    color: colors.dark
  },
  valeur: {
    color: colors.dark
  },
  unite: {
    color: colors.regular
  }
})

//
export default RowMesure
