import React, { useEffect, useRef, useState } from 'react'
import "./Weather.css"
import search_icon from "../assets/search.png"
import wind_icon from "../assets/wind.png"
import humidity_icon from "../assets/humidity.png"

export default function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const inputRef = useRef();


    const search = async (city) => {
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
                isDay:data.current.is_day,
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
            <div className="search-bar">
                <input type="text" placeholder='Search' ref={inputRef} onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        search(inputRef.current.value)
                    }
                }} />
                <img src={search_icon} alt="" onClick={() => search(inputRef.current.value)} />
            </div>
            {weatherData ? <>
                <img src={weatherData.icon} alt="" className='weather-icon' />
                <p className='temperature'>{weatherData.temperature}°c</p>
                <p className='location'>{weatherData.location}</p>
                <div className="weather-data">
                    <div className="col">
                        <img src={humidity_icon} />
                        <div>
                            <p>{weatherData.humidity}%</p>
                            <span>humidity</span>
                        </div>
                    </div>
                    <div className="col">
                        <img src={wind_icon} />
                        <div>
                            <p>{weatherData.windSpeed}km/h</p>
                            <span>wind peed</span>
                        </div>
                    </div>
                </div>
            </> : <></>}


        </div>
    )
}
