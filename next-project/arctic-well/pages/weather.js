import React, { useEffect } from "react";
import { useState } from "react";
import Conditions from "../components/WeatherConditions";
import styles from "../styles/Weather.module.css";

export default () => {
 const [responseObj, setResponseObj] = useState({});


 useEffect(()=> {
   getWeather();
 },[])
//  //responseObj is now full url. can in the future be latlng
//  const getCity = () => {
//    setResponseObj("London");
//  };


const getWeather = async () => {
    // setResponseObj({});
    const latLng = {lat: 59.3095651,
    lng: 18.0194099};
    console.log("coord: ", latLng);
    const query = "Stockholm";
    const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHERMAP_API_KEY;

    let url =
        `https://api.openweathermap.org/data/2.5/weather?lat=${latLng.lat}&lon=${latLng.lng}&appid=${apiKey}`;
    //   `https://api.openweathermap.org/data/2.5/weather?q=` + query + apiKey;
    // //        console.log(url);

    const getdata = await fetch(url, {
      "method": "GET",
      })
      // responseObj(url)
      // setResponseObj(url)
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
      });
  }

  return (
    <div className={styles.currentWeather}>
      {/* {JSON.stringify(responseObj)} */}
      <Conditions
               responseObj={responseObj} />
    </div>
  );
};


// function loadDoc() {
//   const query = document.getElementById("myInput").value;
//   const apiKey = process.env.WEATHER_API_KEY;
//   const url =
//     "https://api.openweathermap.org/data/2.5/weather?q=" + query + apiKey;
//   console.log(url);

//   const xhttp = new XMLHttpRequest();
//   xhttp.open("GET", url);
//   // xhttp.open("GET", "/js/weather.json")
//   xhttp.onload = function () {
//     // document.getElementById("app").innerHTML = this.responseText;
//     console.log(this.response);

//     let data = JSON.parse(this.response);
//     createWeatherBox(data);
//     localStorage.setItem("CityInput", JSON.stringify(query));
//     document.querySelector("form").reset();
//   };

//   xhttp.send(JSON.stringify(query));
// }
