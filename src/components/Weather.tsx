import React, { useEffect, useRef, useState } from 'react';
import "./Weather.css";
import search_icon from "../assets/search.png"
import wind_icon from "../assets/wind.png"
import humidity_icon from "../assets/humidity.png"
import SearchBar from './SearchBar'
import WeatherInfo from './WeatherInfo';
import WeatherDetails from './WeatherDetails';

interface WeatherData {
    humidity: number;
    windSpeed: number;
    temperature: number;
    location: string;
    icon: string;
    isDay: number;
}

export default function Weather() {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const search = async (city: string) => {
        try {
            const url = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_APP_ID}&q=${city}`
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setWeatherData({
                humidity: data.current.humidity,
                windSpeed: data.current.wind_kph,
                temperature: data.current.temp_c,
                location: data.location.name,
                icon: `https:${data.current.condition.icon}`,
                isDay: data.current.is_day,
            })
        } catch (error) {
            console.error("API呼び出しでエラー:", error);
        }
    }

    useEffect(() => {
        search("Tokyo");
    }, [])

    return (
        <div className={`weather ${weatherData && weatherData.isDay === 0 ? 'night' : 'day'}`}>
            <SearchBar onSearch={search} inputRef={inputRef} />
            {weatherData && (
                <>
                    <WeatherInfo
                        icon={weatherData.icon}
                        temperature={weatherData.temperature}
                        location={weatherData.location}
                    />
                    <WeatherDetails
                        humidity={weatherData.humidity}
                        windSpeed={weatherData.windSpeed}
                    />
                </>
            )}
        </div>
    );
}