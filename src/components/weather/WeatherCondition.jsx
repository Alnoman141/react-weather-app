import maxTempIcon from '../../assets/icons/temp-max.svg';
import minTempIcon from '../../assets/icons/temp-min.svg';
import humidityIcon from '../../assets/icons/humidity.svg';
import cloudIcon from '../../assets/icons/cloud.svg';
import windIcon from '../../assets/icons/wind.svg';

import { useContext } from 'react';
import { WeatherContext } from '../../context';

export default function WeatherCondition() {
  const { weatherData } = useContext(WeatherContext);
  const { maxTemp, minTemp, humidity, cloudPercent, wind, climate } = weatherData || {};

  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        The climate is <u>{climate}</u>
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{maxTemp}°</p>
            <img src={maxTempIcon} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{minTemp}°</p>
            <img src={minTempIcon} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humidity</span>
          <div className="inline-flex space-x-4">
            <p>{humidity}%</p>
            <img src={humidityIcon} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{cloudPercent}%</p>
            <img src={cloudIcon} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{wind}km/h</p>
            <img src={windIcon} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  )
}
