import cloudIcon from "../../assets/cloud.svg"
import hazeIcon from "../../assets/haze.svg"
import rainIcon from "../../assets/rainy.svg"
import snowIcon from "../../assets/snow.svg"
import sunnyIcon from "../../assets/sunny.svg"
import thunderIcon from "../../assets/thunder.svg"

import pinIcon from "../../assets/pin.svg"
import { useContext } from "react"
import { WeatherContext } from "../../context"
import { getFormattedDate } from "../../utils/date"

export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext)
  const { temperature, location, time, climate } = weatherData || {}

  function getWeatherIcon(climate) {
    switch (climate?.toLowerCase()) {
      case "clouds":
        return cloudIcon
      case "haze":
        return hazeIcon
      case "fog":
        return hazeIcon
      case "mist":
        return hazeIcon
      case "rain":
        return rainIcon
      case "snow":
        return snowIcon
      case "sunny":
        return sunnyIcon
      case "clear":
        return sunnyIcon
      case "thunder":
        return thunderIcon
      default:
        return sunnyIcon
    }
  }

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt={climate} />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}&#176;C
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pinIcon} alt="pin" />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)} -{" "}
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  )
}
