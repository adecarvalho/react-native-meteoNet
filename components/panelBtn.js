import React from "react"
import { View, StyleSheet, Text } from "react-native"
import { useSelector, useDispatch } from "react-redux"

import {
  REQUEST_METEO_BY_CITY,
  REQUEST_ADD_FAVORITE
} from "../store/types/index"

import ReloadButton from "./reloadButton"
import AddFavoriteBtn from "./addFavoriteBtn"

const PanelBtn = props => {
  //
  const meteoState = useSelector(state => state.meteoReducer)
  const favoriteState = useSelector(state => state.favoriteReducer)

  const dispatch = useDispatch()

  //
  const onReloadHandler = () => {
    const city = meteoState.data.city

    if (meteoState.show) {
      dispatch({ type: REQUEST_METEO_BY_CITY, payload: city })
    }
  }

  //
  const onAddFavoriteHandler = () => {
    const city = meteoState.data.city

    if (city) {
      //console.log("add favorite " + city)
      dispatch({
        type: REQUEST_ADD_FAVORITE,
        payload: city
      })
    }
  }

  //
  return (
    <View style={styles.container}>
      <ReloadButton onReloadHandler={onReloadHandler}></ReloadButton>
      <AddFavoriteBtn
        onAddFavoriteHandler={onAddFavoriteHandler}
        favoriteState={favoriteState}
      ></AddFavoriteBtn>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})

export default PanelBtn
