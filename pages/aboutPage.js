import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

import colors from "../theme/colors"
import { Colors } from "react-native/Libraries/NewAppScreen"

const AboutPage = ({ navigation }) => {
  //
  const pressHandler = () => {
    navigation.navigate("Home")
  }
  //
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>MétéoNet</Text>
      </View>

      <Text style={styles.subtitle}>React-Native</Text>

      <Text style={styles.web}>Données: https://api.darksky.net</Text>

      <Text style={styles.author}>By, A.De Carvalho 2020</Text>

      <View style={styles.button_container}>
        <Button
          onPress={pressHandler}
          title="Rechercher Météo"
          color={colors.action}
        ></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center"
  },
  title_container: {
    margin: 50
  },
  title: {
    fontSize: 48,
    color: colors.white
  },
  subtitle: {
    fontSize: 30,
    color: colors.white
  },
  web: {
    color: colors.white,
    fontSize: 18
  },
  author: {
    color: colors.light,
    fontSize: 14
  },
  button_container: {
    marginTop: 20,
    width: "50%"
  }
})

export default AboutPage
