import React, { useEffect } from "react";
import { useState } from "react";
import Conditions from "../components/WeatherConditions";
import styles from "../styles/Weather.module.css";

export default () => {
  const [responseObj, setResponseObj] = useState({});

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    const latLng = { lat: 59.3095651, lng: 18.0194099 };
    console.log("coord: ", latLng);
    const query = "Stockholm";
    const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHERMAP_API_KEY;

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latLng.lat}&lon=${latLng.lng}&appid=${apiKey}`;
    //   `https://api.openweathermap.org/data/2.5/weather?q=` + query + apiKey;
      console.log(url);

    const getdata = await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
      });
  };

  return (
    <div className={styles.currentWeather}>
      <Conditions responseObj={responseObj} />
    </div>
  );
};

