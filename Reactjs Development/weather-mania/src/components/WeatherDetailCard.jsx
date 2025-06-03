import { useEffect, useState } from "react";
import axios from "axios";
import { OPENWEATHER_API_KEY } from "../consts";

export default function WeatherDetailCard(props) {

  const [weather, setWeather] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.location}&appid=${OPENWEATHER_API_KEY}&units=metric`
    )
    .then((result) => {
      setWeather(result.data);
      setLoading(false);
      console.log(result.data);
    })
    .catch((e) => {
      setLoading(false);
      setError(true);
    });
    console.log(props.location)
  }, [props.location]);

  return (
    <div className="Card bg-neutral shadow-xl">
        <div className="flex flex-col space-y-5 card-body items-center text-center">
            <h2 className="text-5xl font-bold">{props.location}</h2>
            {Loading && ( <span className="loading loading-spinner loading-xl"></span> )}

            {!Loading && error && <p className="text-lg">Unable to load data</p>}
            
            {!Loading && !error && weather != null && <>
            <div className="pt-4 flex flex-row items-center justify-center max-h-screen">
                <p className="6xl">{weather.main.temp.toFixed(0)}</p>
            </div>
            <div className="flex flex-row items-center justify-evenly w-64 space-x-4">
                <div className="pt-4 flex flex-row items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
</svg>
                    <p className="text-3xl">{weather.clouds.all}</p>
                </div>
                <div className="pt-4 flex flex-row items-center justify-center space-x-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>
                    <p className="text-3xl">{weather.wind.speed.toFixed(1)} m/s</p>
                </div>
                <div className="pt-4 flex flex-row items-center justify-center space-x-2">
<div className="pt-4 flex flex-row items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
</svg>
                </div>
                </div>
            </div>
          </>}
        </div>
    </div>
  )
}
