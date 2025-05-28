import React, { useState } from 'react';
// Import data and WeatherCard here
import cities from "./data";
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";


function App() {
    const [location, setLocation] = useState("Rome")
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {/* Render components here */}
                <div className = "card-container">
                    <h2 className = "card-title">Cities</h2>
                    {cities.map((card, index) => (
                        <WeatherCard
                            key = {index}
                            data = {card}
                        />
                    ))}
                </div>
                <div className = "location-container">
                    <h2 className = "location-title">Your Location</h2>
                    <Location
                        data = {cities}
                        location = {location}
                        setLocation = {setLocation}
                    />
                </div>
            </div>
        </>
    )
}

export default App;