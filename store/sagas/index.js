import {
  delay,
  all,
  call,
  put,
  takeEvery,
  takeLatest,
  select
} from "redux-saga/effects"

import {
  REQUEST_METEO_BY_CITY,
  SUCESS_METEO_BY_CITY,
  FAILLURE_METEO_BY_CITY,
  REQUEST_ADD_FAVORITE,
  SUCCESS_ADD_FAVORITE,
  FAILLURE_ADD_FAVORITE,
  RESET_FAILLURE_ADD_FAVORITE,
  REQUEST_DELETE_FAVORITE,
  ACTION_DELETE_FAVORITE
} from "../types/index"

import { getOpenWeatherMapDatas } from "../../api/index"

//
function capitalize_words(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

//
function* getMeteo(action) {
  try {
    const city = action.payload
    const res = yield call(getOpenWeatherMapDatas, city)

    //console.log(res)
    //mise en forme donnees meteo

    const meteo = {
      city: capitalize_words(city),
      temperature: Math.floor(res.main.temp),
      pressure: res.main.pressure,
      humidity: res.main.humidity,
      wind: Math.round(res.wind.speed),
      description: res.weather[0].description,
      time: res.dt
    }
    yield delay(500)

    //console.log(meteo)
    yield put({ type: SUCESS_METEO_BY_CITY, payload: meteo })
    //
  } catch (error) {
    //console.log("une erreur " + error.message)
    yield put({ type: FAILLURE_METEO_BY_CITY, payload: error.message })
  }
}

//
function* addFavorite(action) {
  const city = action.payload
  const maliste = yield select(state => state.favoriteReducer.data)

  const filtab = maliste.filter(item => {
    return item.name.toLowerCase() === city.toLowerCase()
  })

  //
  if (filtab.length == 0) {
    const cityCapitalize = capitalize_words(city.toString())
    yield put({ type: SUCCESS_ADD_FAVORITE, payload: cityCapitalize })
  } else {
    //console.log("Présent dans la liste...")
    yield put({ type: FAILLURE_ADD_FAVORITE, payload: "Présent dans la liste" })
  }
  //
  yield delay(3000)

  yield put({ type: RESET_FAILLURE_ADD_FAVORITE, payload: null })
}

//
function* deleteFavorite(action) {
  const id = action.payload
  yield put({ type: ACTION_DELETE_FAVORITE, payload: id })
}

//
export default function* rootSaga() {
  yield all([
    takeLatest(REQUEST_METEO_BY_CITY, getMeteo),
    takeLatest(REQUEST_ADD_FAVORITE, addFavorite),
    takeLatest(REQUEST_DELETE_FAVORITE, deleteFavorite)
  ])
}
