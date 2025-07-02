import React from "react";

type Props = {
  icon: string;
  temperature: number;
  location: string;
};

export default function WeatherInfo({ icon, temperature, location }: Props) {
  return (
    <div className="weather-info">
      <img src={icon} alt="weather icon" className="weather-icon" />
      <p className="temperature">{temperature}°c</p>
      <p className="location">{location}</p>
    </div>
  );
}