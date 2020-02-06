import { combineReducers } from "redux"

import meteoReducer from "../reducers/meteoReducer"
import favoriteReducer from "../reducers/favoriteReducer"

const rootReducer = combineReducers({
  meteoReducer,
  favoriteReducer
})

export default rootReducer
