import React, { useState } from "react";
import searshicon from "../assets/imags/search.png";
import cloud_icon from "../assets/imags/cloud.png";
import humidity_icon from "../assets/imags/humidity.png";
import wind_icon from "../assets/imags/wind.png";
import clear_icon from "../assets/imags/clear.png";
import drizzle_icon from "../assets/imags/drizzle.png";
import rain_icon from "../assets/imags/rain.png";
import snow_icon from "../assets/imags/snow.png";

import axios from "axios";
import "./weatherapp.css";
export const Weatherapp = () => {
    const [wicon, setwicon] = useState(cloud_icon);
  let ipa_key = "33c8ae33312a4003f4b05fbc7bcdfada";
  const search = async () => {
    const element = document.getElementsByClassName("cntry");
    if (element[0].value === "") {
      return 0;
    }
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=33c8ae33312a4003f4b05fbc7bcdfada`
    );
    console.log(res.data);
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-r");
    const temprature = document.getElementsByClassName("weahter-temp");
    const location = document.getElementsByClassName("weather-location");
    console.log(res.data.main.humidity);
    humidity[0].innerHTML = res.data.main.humidity+" %";
    wind[0].innerHTML = Math.floor(res.data.wind.speed)+" Km/h";
    temprature[0].innerHTML = Math.floor( res.data.main.temp)+" C";
      location[0].innerHTML = res.data.name;
      if (res.data.weather[0].icon === "01d" || res.data.weather[0].icon === "01n") {
          setwicon(clear_icon)
      } else if (res.data.weather[0].icon === "02d" || res.data.weather[0].icon === "02n") { 
          setwicon(cloud_icon);
      } else if (res.data.weather[0].icon === "03d" || res.data.weather[0].icon === "03n") {
          setwicon(drizzle_icon);
      }
      else if (res.data.weather[0].icon === "04d" || res.data.weather[0].icon === "04n") {
          setwicon(drizzle_icon);
      }
      else if (res.data.weather[0].icon === "09d" || res.data.weather[0].icon === "09n") {
          setwicon(rain_icon);
      }
      else if (res.data.weather[0].icon === "10d" || res.data.weather[0].icon === "10n") {
          setwicon(rain_icon);
      }
      else if (res.data.weather[0].icon === "13d" || res.data.weather[0].icon === "13n") {
          setwicon(snow_icon);
      } else {
          setwicon(clear_icon)
      }
  };

  return (
    <div>
      <div className="container">
        <div className="top-bar">
          <input type="text" className="cntry" placeholder="search" />
          <div
            className="search-icon"
            onClick={() => {
              search();
            }}
          >
            <img src={searshicon} alt="" />
          </div>
        </div>
        <div className="weather-imge">
          <img src={wicon} alt="" />
        </div>
        <div className="weahter-temp">24 C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
              <div className="wind-r">18 Km/h</div>
              <div className="text">wind speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
