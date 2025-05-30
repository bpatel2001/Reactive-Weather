import React, { useState, useEffect } from "react";
import sunny from 'url:../assets/Sunny.svg'
import rainy from 'url:../assets/Rainy.svg'
import partlycloudy from 'url:../assets/PartlyCloudy.svg'
import cloudy from 'url:../assets/Cloudy.svg'

function interpretWeatherCode(code) {
  if (code === 0) return 'Sunny';
  if ([1, 2, 3].includes(code)) return 'Partly cloudy';
  if ([45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return 'Rainy';
  if ([95, 96, 99].includes(code)) return 'Rainy';
  if ([45, 48].includes(code)) return 'Cloudy';
  return 'Sunny'; 
}

function getWeatherIcon(forecast) {
  switch (forecast) {
    case 'Sunny':
      return sunny;
    case 'Rainy':
      return rainy;
    case 'Partly cloudy':
      return partlycloudy;
    case 'Cloudy':
      return cloudy;
    default:
      return sunny; 
  }
}

function WeatherCard({data}) {
  const [forecast, setForecast] = useState('Sunny');
  const [temperature, setTemperature] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);

  useEffect(() => {
        // Fetch weather data for the initial location
        const fetchWeatherData = async () => {
            try {
                const {latitude, longitude} = data;
                console.log(`Fetching weather data for ${data.city} at coordinates: ${latitude}, ${longitude}`);
                const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=weather_code,temperature_2m,wind_speed_10m`);
                const weatherData = await response.json();
                if (weatherData.current) {
                    const weatherCode = weatherData.current.weather_code;
                    const temp = weatherData.current.temperature_2m;
                    const windSpeed = weatherData.current.wind_speed_10m;
                    setForecast(interpretWeatherCode(weatherCode));
                    setTemperature(`${temp}°C`);
                    setWindSpeed(`${windSpeed} m/s`);
                } else {
                    console.error("No current weather data found");
                }
                
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };
        fetchWeatherData();
    }, [data]);

  const icon = getWeatherIcon(forecast);

  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {icon} alt="Card image cap" id = "icon"/>
        </div>
        <div className="card-body">
            <h3 className="card-title">{data.city}</h3>
            <h5 className="card-text">{forecast}</h5>
            <h5 className="card-text">{temperature}</h5>
            <h5 className="card-text">Wind Speed: {windSpeed}</h5>
            <h5 className="card-text">{data.latitude},{data.longitude}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
export default WeatherCard;