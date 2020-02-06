import React, { useState, useEffect } from "react"
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated
} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import colors from "../theme/colors"

//
const FavoriteRow = ({
  city,
  showCityWeatherHandler,
  deleteFavoriteCityHandler
}) => {
  //
  const [fadeValue] = useState(new Animated.Value(0))

  //
  const fadeInAction = () => {
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start()
  }

  //
  const fadeOutAction = () => {
    Animated.timing(fadeValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      deleteFavoriteCityHandler(city)
    })
  }

  //
  useEffect(() => {
    fadeInAction()
  }, [fadeValue])

  //
  const onPressCityHandler = () => {
    showCityWeatherHandler(city)
  }

  //
  const onPressDeleteCity = () => {
    fadeOutAction()
    //deleteFavoriteCityHandler(city)
  }

  //
  return (
    <Animated.View style={[styles.container, { opacity: fadeValue }]}>
      <TouchableOpacity
        onPress={onPressCityHandler}
        style={styles.containerVille}
      >
        <Text style={styles.nomVille}>{city.name}</Text>
      </TouchableOpacity>
      {/** */}
      <TouchableOpacity
        onPress={onPressDeleteCity}
        style={styles.containerButton}
      >
        <MaterialIcons
          name="delete"
          size={32}
          color={colors.light}
        ></MaterialIcons>
      </TouchableOpacity>
    </Animated.View>
  )
}

//
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#856DD5",
    width: "100%",
    height: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 2
  },
  containerVille: {
    backgroundColor: colors.white,
    justifyContent: "center",
    flex: 3,
    borderRadius: 20,
    margin: 5
  },
  nomVille: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20
  },
  containerButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default FavoriteRow
