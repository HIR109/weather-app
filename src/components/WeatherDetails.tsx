import React from "react";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";

type Props = {
  humidity: number;
  windSpeed: number;
};

export default function WeatherDetails({ humidity, windSpeed }: Props) {
  return (
    <div className="weather-data">
      <div className="col">
        <img src={humidity_icon} alt="humidity" />
        <div>
          <p>{humidity}%</p>
          <span>humidity</span>
        </div>
      </div>
      <div className="col">
        <img src={wind_icon} alt="wind" />
        <div>
          <p>{windSpeed}km/h</p>
          <span>wind speed</span>
        </div>
      </div>
    </div>
  );
}