import React from 'react';
// Import data and WeatherCard here
import cities from "./data";
import WeatherCard from "./components/WeatherCard";


function App() {
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {/* Render components here */}
                <div className = "card-container">
                    {cities.map((card, index) => (
                        <WeatherCard
                            key = {index}
                            data = {card}
                        />
                    ))}
                </div>
            </div>
            
        </>
    )
}

export default App;