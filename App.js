import React from "react"
import { StatusBar } from "react-native"
import { Provider } from "react-redux"

import { createAppContainer } from "react-navigation"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { MaterialIcons } from "@expo/vector-icons"

import HomePage from "./pages/homePage"
import FavoritePage from "./pages/favoritePage"
import AboutPage from "./pages/aboutPage"

import colors from "./theme/colors"

import { store, persistor } from "./store/mainStore"
import { PersistGate } from "redux-persist/integration/react"

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialIcons
            name="home"
            color={focused ? colors.iconSelected : colors.iconDefault}
            size={32}
          ></MaterialIcons>
        )
      }
    },
    Favorite: {
      screen: FavoritePage,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialIcons
            name="favorite"
            color={focused ? colors.iconSelected : colors.iconDefault}
            size={32}
          ></MaterialIcons>
        )
      }
    },
    About: {
      screen: AboutPage,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialIcons
            name="help"
            color={focused ? colors.iconSelected : colors.iconDefault}
            size={32}
          ></MaterialIcons>
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    //
    tabBarOptions: {
      activeTintColor: colors.white,
      activeBackgroundColor: colors.primary,
      showLabel: false,
      showIcon: true
    }
  }
)
//
const AppContainer = createAppContainer(AppNavigator)

//
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <StatusBar
            backgroundColor={colors.transparente}
            translucent
            barStyle="light-content"
          ></StatusBar>
          <AppContainer></AppContainer>
        </>
      </PersistGate>
    </Provider>
  )
}
