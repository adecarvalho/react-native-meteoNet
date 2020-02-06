import React from "react"
import { View, StyleSheet } from "react-native"

import RowMesure from "./rowMesure"

import colors from "../theme/colors"

//
const PanelMesures = props => {
  const { humidity, pressure, wind } = props

  //
  return (
    <View style={styles.container}>
      <RowMesure type={"Humidite"} value={humidity} unite={"%"}></RowMesure>
      <RowMesure type={"Pression"} value={pressure} unite={"hPa"}></RowMesure>
      <RowMesure type={"Vent"} value={wind} unite={"km/h"}></RowMesure>
    </View>
  )
}

//
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: "80%",
    height: "20%",
    borderRadius: 20
  }
})

export default PanelMesures
