import Header from "./components/header/Header"
import WeatherBoard from "./components/weather/WeatherBoard"

import ClearSkyBg from "./assets/backgrounds/clear-sky.jpg"
import FewCloudsBg from "./assets/backgrounds/few-clouds.jpg"
import ScatteredCloudsBg from "./assets/backgrounds/scattered-clouds.jpg"
import MistBg from "./assets/backgrounds/mist.jpeg"
import RainyDay from "./assets/backgrounds/rainy-day.jpg"
import ThunderstormBg from "./assets/backgrounds/thunderstorm.jpg"
import SnowBg from "./assets/backgrounds/snow.jpg"
import SlowerRainBg from "./assets/backgrounds/shower-rain.jpg"
import SunnyBg from "./assets/backgrounds/sunny.jpg"
import WinterBg from "./assets/backgrounds/winter.jpg"

import { useContext, useState, useEffect } from "react"
import { WeatherContext } from "./context"

export default function Page() {
  const { weatherData, loading } = useContext(WeatherContext)
  const [backgroundImage, setBackgroundImage] = useState("")

  const determineBackgroundImage = (climate) => {
    switch (climate) {
      case "Clear":
        return ClearSkyBg
        case "Clouds":
        return FewCloudsBg
      case "Scattered":
        return ScatteredCloudsBg
      case "Mist":
        return MistBg
      case "Rain":
        return RainyDay
      case "Thunderstorm":
        return ThunderstormBg
      case "Snow":
        return SnowBg
      case "Shower":
        return SlowerRainBg
      case "Sunny":
        return SunnyBg
      case "Winter":
        return WinterBg
      default:
        return ClearSkyBg
    }
  }

    useEffect(() => {
      if (weatherData) {
        const climate = weatherData.climate || "Clear"
        setBackgroundImage(determineBackgroundImage(climate))
      }
    }, [weatherData])
    
  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-200 rounded-md w-100 mt-14 p-10 mx-auto">
            <p className="text-center text-3xl text-black">{loading.message}</p>
        </div>
      ) : (
        <div
          className="grid place-items-center h-screen bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  )
}
