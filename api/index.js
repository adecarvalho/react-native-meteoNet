const latParis = 48.51
const lonParis = 2.21

//const appId = "c9b6783fa30e383c37bcf5a86a24ad6c"

const api = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  appId: "&appId=c9b6783fa30e383c37bcf5a86a24ad6c",
  units: "&units=metric",
  lang: "&lang=fr"
}

//
export async function getOpenWeatherMapDatas(city = "paris") {
  try {
    const url = `${api.url}${city}${api.appId}${api.units}${api.lang}`

    const val = await fetch(url)

    //console.log(val)

    const meteo = await val.json()
    //console.log(meteo)

    if (meteo.cod === "404") {
      throw new Error("Aucunes données disponibles")
      return null
    }

    return meteo
  } catch (error) {
    //console.log("Erreur " + error.message)
    throw new Error(error.message)
  }
}
