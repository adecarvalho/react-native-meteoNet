import React from "react"
import { View, StyleSheet, Text } from "react-native"

import moment from "moment"
import("moment/locale/fr")
moment.locale("fr")

import colors from "../theme/colors"

//
const PanelTemp = props => {
  const { city, temperature, description, time } = props

  //
  const formatDate = val => {
    return moment(val * 1000).format("LLL")
  }

  //
  return (
    <View style={styles.container}>
      <View style={styles.ville_container}>
        <Text style={styles.ville}>{city || "ville"}</Text>
      </View>
      {/** */}
      <View style={styles.temperature_content}>
        <Text style={styles.temperature}>{temperature || "?"}</Text>
        <Text style={styles.degre}>C</Text>
      </View>
      {/** */}
      <View>
        <Text style={styles.description}>{description || "?"}</Text>
      </View>
      {/** */}
      <View>
        <Text style={styles.date}>{formatDate(time)}</Text>
      </View>
    </View>
  )
}

//
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: "80%",
    height: "35%",
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2
  },
  ville_container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    padding: 10
  },
  ville: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.primary
  },
  temperature_content: {
    flexDirection: "row",
    justifyContent: "center"
  },
  temperature: {
    fontSize: 60,
    color: colors.regular,
    fontWeight: "bold"
  },
  degre: {
    fontSize: 20,
    color: colors.regular,
    marginLeft: 10
  },
  description: {
    fontSize: 20,
    color: colors.primary,
    textAlign: "center"
  },
  date: {
    color: colors.darker,
    textAlign: "center",
    marginTop: 20
  }
})

export default PanelTemp
