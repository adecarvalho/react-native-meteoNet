import {
  SUCCESS_ADD_FAVORITE,
  ACTION_DELETE_FAVORITE,
  FAILLURE_ADD_FAVORITE,
  RESET_FAILLURE_ADD_FAVORITE
} from "../types/index"

function comparaison(a, b) {
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1
  }
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1
  }
  return 0
}

//
const INIT_STATE = {
  error: "",
  data: [
    {
      id: Math.random(),
      name: "Paris"
    },
    {
      id: Math.random(),
      name: "Cergy"
    }
  ]
}

//
export default function(state = INIT_STATE, action) {
  let newState = undefined

  switch (action.type) {
    //
    case SUCCESS_ADD_FAVORITE:
      const thecity = action.payload
      const newcity = { id: Math.random(), name: thecity }

      newState = {
        ...state,
        data: [...state.data, newcity].sort(comparaison),
        error: ""
      }
      return newState

    //
    case FAILLURE_ADD_FAVORITE:
      const message = action.payload
      newState = { ...state, data: [...state.data], error: message }
      return newState

    //
    case RESET_FAILLURE_ADD_FAVORITE:
      newState = { ...state, error: "" }
      return newState

    //
    case ACTION_DELETE_FAVORITE:
      const zeid = action.payload

      const newdata = state.data.filter(item => item.id !== zeid)

      newState = { data: newdata, error: "" }
      return newState

    default:
      return state
  }
}
