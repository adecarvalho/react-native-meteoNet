import React from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import colors from "../theme/colors"
import { REQUEST_DELETE_FAVORITE } from "../store/types/index"

import FavoriteRow from "../components/favoriteRow"

const FavoritePage = props => {
  const favoriteState = useSelector(state => state.favoriteReducer)
  const dispatch = useDispatch()

  //
  const showCityWeatherHandler = city => {
    //console.log(">> " + city.id + ":" + city.name)
    props.navigation.navigate("Home", { name: city.name })
  }

  //
  const deleteFavoriteCityHandler = city => {
    dispatch({ type: REQUEST_DELETE_FAVORITE, payload: city.id })
  }

  //
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Villes Favorites</Text>
      {/** */}
      <FlatList
        style={styles.liste}
        data={favoriteState.data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <FavoriteRow
            showCityWeatherHandler={showCityWeatherHandler}
            deleteFavoriteCityHandler={deleteFavoriteCityHandler}
            city={item}
          ></FavoriteRow>
        )}
      ></FlatList>
      {/** */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  titre: {
    marginTop: 50,
    fontSize: 30,
    color: colors.white,
    fontWeight: "bold"
  },
  liste: {
    marginTop: 20,
    width: "100%"
  }
})

export default FavoritePage
