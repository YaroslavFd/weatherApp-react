import { useEffect, useState } from "react";

import Content from "../Content";
import Search from "../Search";
import NotFound from "../NotFound";
import Spinner from "../Spinner";

import "./styles.css";

const API_KEY = "02b7cd60943d4928f704ef2e471fce52";

const App = () => {
  const [inputValue, setInputValue] = useState("London");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [store, setStore] = useState({
    city: inputValue,
    temperature: 9,
    humidity: 70,
    windSpeed: 5,
    description: "clear",
    src: "/images/clear.png",
  });

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${store.city}&appid=${API_KEY}`
    )
      .then((data) => data.json())
      .then((res) => {
        const temperature = parseInt(res.main.temp - 273);
        const humidity = res.main.humidity;
        const windSpeed = res.wind.speed.toFixed(2);
        const description = res.weather.description;
        let src = "";
        switch (res.weather[0].main) {
          case "Clouds":
            src = "/images/cloud.png";
            break;
          case "Clear":
            src = "/images/clear.png";
            break;
          case "Mist":
            src = "/images/mist.png";
            break;
          case "Rain":
            src = "/images/clear.png";
            break;
          case "Snow":
            src = "/images/snow.png";
            break;
          default:
            src = "/images/404.png";
        }

        setStore({
          ...store,
          temperature,
          humidity,
          windSpeed,
          description,
          src,
        });

        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [store.city]);

  const handlerSubmit = (e, value) => {
    e.preventDefault();
    const city = value;
    setStore({
      ...store,
      city,
    });
  };

  return (
    <div className="container">
      <Search
        inputValue={inputValue}
        setInputValue={setInputValue}
        handlerSubmit={handlerSubmit}
      />
      {isLoading ? (
        <Spinner />
      ) : !isError ? (
        <Content store={store} />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default App;
