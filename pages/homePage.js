import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { View, StyleSheet, Alert, ActivityIndicator, Text } from "react-native"

import colors from "../theme/colors"

import { REQUEST_METEO_BY_CITY } from "../store/types/index"

import Search from "../components/search"
import PanelTemp from "../components/panelTemp"
import PanelMesures from "../components/panelMesures"
import PanelBtn from "../components/panelBtn"

const showLoading = val => {
  if (val) {
    return (
      <View>
        <ActivityIndicator
          size={"large"}
          color={colors.white}
        ></ActivityIndicator>
      </View>
    )
  } else return null
}

//
const HomePage = props => {
  //
  const dispatch = useDispatch()
  const meteoState = useSelector(state => state.meteoReducer)
  const favoriteState = useSelector(state => state.favoriteReducer)

  let favoriteCity = "Paris"

  if (props.navigation.state.params !== undefined) {
    //
    favoriteCity = props.navigation.state.params.name
  } else {
    if (favoriteState.data.length > 0) {
      favoriteCity = favoriteState.data[0].name
    }
  }

  //
  // getCityHandler
  const getCityHandler = city => {
    if (city && city.trim() !== "") {
      //console.log("city= " + city)
      dispatch({ type: REQUEST_METEO_BY_CITY, payload: city })
      //
    } else {
      Alert.alert(
        "ALERT",
        "Erreur de saisie",
        [{ text: "OK", onPress: () => {} }],
        { cancelable: false }
      )
    }
  }

  //
  useEffect(() => {
    //
    if (favoriteCity !== "") {
      getCityHandler(favoriteCity)
    }
  }, [favoriteCity])

  //
  return (
    <View style={styles.container}>
      <Search getCityHandler={getCityHandler}></Search>
      {/** */}
      {showLoading(meteoState && meteoState.loading)}
      {/** */}
      <Text style={styles.erreur}>{meteoState && meteoState.error}</Text>
      {/** */}
      {meteoState.show == true ? (
        <PanelTemp
          city={meteoState && meteoState.data.city}
          temperature={meteoState && meteoState.data.temperature}
          description={meteoState && meteoState.data.description}
          time={meteoState && meteoState.data.time}
        ></PanelTemp>
      ) : null}

      {/** */}
      {meteoState.show == true ? (
        <PanelMesures
          humidity={meteoState && meteoState.data.humidity}
          pressure={meteoState && meteoState.data.pressure}
          wind={meteoState && meteoState.data.wind}
        ></PanelMesures>
      ) : null}

      {/** */}
      {meteoState.show == true ? <PanelBtn></PanelBtn> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: colors.primary,
    flexDirection: "column",
    alignItems: "center"
  },
  erreur: {
    color: colors.white,
    fontSize: 20,
    textAlign: "center"
  }
})

export default HomePage
