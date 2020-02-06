import { createStore, applyMiddleware } from "redux"
import { AsyncStorage } from "react-native"
import { persistStore, persistReducer } from "redux-persist"
import createSagaMiddleware from "redux-saga"

import rootReducer from "./reducers/rootReducer"
import sagas from "./sagas/index"

const sagaMiddleware = createSagaMiddleware()

//
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["favoriteReducer"]
}

//
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

const persistor = persistStore(store)

sagaMiddleware.run(sagas)

export { store, persistor }
