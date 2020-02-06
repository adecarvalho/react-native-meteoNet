import {
  REQUEST_METEO_BY_CITY,
  SUCESS_METEO_BY_CITY,
  FAILLURE_METEO_BY_CITY
} from "../types/index"

const INIT_STATE = {
  data: {},
  loading: false,
  error: "",
  show: true
}

//
export default function(state = INIT_STATE, action) {
  let newstate = null
  //
  switch (action.type) {
    //
    case REQUEST_METEO_BY_CITY:
      newstate = { ...state, loading: true, error: "", show: false }
      return newstate
    //
    case SUCESS_METEO_BY_CITY:
      newstate = {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
        show: true
      }
      //console.log(newstate)
      return newstate
    //
    case FAILLURE_METEO_BY_CITY:
      newstate = {
        ...state,
        loading: false,
        error: action.payload,
        show: false
      }
      //console.log(newstate)
      return newstate

    //
    default:
      return state
  }
}
