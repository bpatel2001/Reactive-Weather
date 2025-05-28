import React from "react";
import sunny from 'url:../assets/Sunny.svg'
import rainy from 'url:../assets/Rainy.svg'
import partlycloudy from 'url:../assets/PartlyCloudy.svg'
import cloudy from 'url:../assets/Cloudy.svg'

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

function Location(props) {
  const locationData = props.data.find(city => city.city === props.location);
  const icon = getWeatherIcon(locationData.forecast);
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {icon} alt="Card image cap" id = "icon"/>
        </div>
        <div className="card-body">
            <h3 className="card-title">{locationData.city}</h3>
            <h5 className="card-text">{locationData.temperature}</h5>
            <h5 className="card-text">{locationData.forecast}</h5>
        </div>
    </div>
  );
};

export default Location;