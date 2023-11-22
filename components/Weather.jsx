import React from "react";
import Image from "next/image";

function Weather({ data }) {
  console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[100vh] m-auto p-4 text-gray-300 z-10">
      {/* top */}
      <div className="relative flex justify justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
      </div>
      {/* bottom */}

      <div className="bg-black/25 relative p-11 rounded-md mb-20">
        <p className="text-4xl text-center pb-6">Weather in {data.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">
              {data.main.feels_like.toFixed(0)}&#176;
            </p>
            <p className="text-xl">Feels like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              {data.wind.speed.toFixed(0)} m/s
            </p>
            <p className="text-xl">Winds</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              {data.main.humidity.toFixed(0)}%
            </p>
            <p className="text-xl">Humidity</p>
          </div>

          <div>
            <p className="font-bold text-2xl">
              {data.main.pressure.toFixed(0)}hPa
            </p>
            <p className="text-xl">Pressure</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
