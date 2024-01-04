"use client"
import axios from "axios"
import React, { useState } from "react"
import { LuWind } from "react-icons/lu"
import { WiHumidity } from "react-icons/wi"

const API_KEY = "c8ee8812b23732ecf3d41d69fbe592f8"
const API_URL = "https://api.openweathermap.org/data/2.5/weather"

const Weather = () => {
  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState("")

  const currentDate = new Date()
  const options = { day: "numeric", month: "numeric", year: "numeric" }
  const formattedDate = currentDate.toLocaleDateString("en-US", options)

  const [day, month, date] = formattedDate.split(" ")

  const time = `${currentDate.getHours()}:${currentDate.getMinutes()}`

  const getWeatherData = async () => {
    try {
      const res = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}`)
      setWeatherData(res.data)
      console.log(res.data)
    } catch (error) {
      console.error("Error fetching data")
    }
  }
  return (
    <div className=" flex flex-col gap-4 justify-center ">
      <div className="flex items-center justify-around  ">
        <input
          className="px-4 caret-[#3E3E3E] py-2 border-2 border-[#3E3E3E] rounded-md text-[#3E3E3E] bg-white"
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          className="px-4 py-2 text-md text-[#F4F4F4] border-zinc-500 border-2 bg-[#3E3E3E] font-medium rounded-md"
          onClick={getWeatherData}
        >
          Get Weather
        </button>
      </div>

      {weatherData && (
        <div className="flex flex-col gap-3 items-center pt-3 p-4 justify-between w-full h-full">
          <h1 className="text-[90px] font-semibold  text-zinc-100 ">
            {(weatherData.main.temp - 273.15).toFixed()}°
          </h1>
          <p className="text-xl">{weatherData.weather[0].description}</p>

          <div>
            <div className="flex items-center gap-3">
              <WiHumidity />
              {weatherData.main.humidity}
            </div>

            <div className="flex items-center gap-3">
              <LuWind />
              {weatherData.wind.speed}
            </div>
          </div>

          <div className="mt-5 flex justify-between  items-center w-[80%] h-full">
            <h2>{time}</h2>

            <h2>
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <h2>{formattedDate}</h2>
          </div>
        </div>
      )}
    </div>
  )
}
export default Weather
