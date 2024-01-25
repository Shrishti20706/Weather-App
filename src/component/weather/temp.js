/*import React, { useEffect, useState } from 'react'
import "./style.css"
import Weathercard from './weathercard';
const Temp = () => {

    const[searchValue,setSearchValue]=useState("indore");
    const[tempInfo,setTempInfo]=useState({});

    const getWeatherInfo=async()=>{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=627bc5fab5fc2a74a52c8fbb6492852e`;
            let res= await fetch(url);
            let data=await res.json();
            const {temp,humidity,pressure}=data.main;
            const{main:weathermood}=data.weather[0];
            const {name}=data;
            const{speed}=data.wind;
            const{country,sunset}=data.sys;
            const myNewWeatherInfo={
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,

            };
            setTempInfo(myNewWeatherInfo);

        }catch(error){
            console.log(error);
        }

    }

    useEffect(()=>{
        getWeatherInfo();
    },[]);

  return (
    <>
      <div className='wrap'>
        <div className='search'>
            <input type="search"
                   placeholder='search...'
                   autoFocus 
                   id="search"
                   className="searchTerm"
                   value={searchValue}
                   onChange={(e)=>searchValue(e.target.value)}
            />
            <button className='searchButton' type='button' onClick={getWeatherInfo}>
                search
            </button>
        </div>
      </div>
      <Weathercard tempInfo={tempInfo}/>
    </>
  )
}

export default Temp*/
import React, { useState, useEffect } from "react";
import Weathercard from "./weathercard";
import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("vidisha");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=627bc5fab5fc2a74a52c8fbb6492852e`;
      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

      {/* our temp card  */}
      <Weathercard tempInfo={tempInfo} />
    </>
  );
};

export default Temp;
