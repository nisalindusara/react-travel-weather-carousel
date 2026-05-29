import { useState } from "react";
import "./styles/App.css";

import SearchCity from "./components/SearchCity";
import WeatherCarousel from "./components/WeatherCarousel";

function App() {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(true);

  const displayData = async (city) => {
    setIsSearching(false);
    setIsLoading(true);

    fetch(
      "https://corsproxy.io/?" +
        encodeURIComponent(
          `https://www.7timer.info/bin/api.pl?lon=${city.lon}&lat=${city.lat}&product=civillight&output=json`,
        ),
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        setWeather(data.dataseries);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather:", error);
        setIsLoading(false);
      });
  };

  return (
    <div className="App">
      {isSearching ? (
        <div className="header-content screen">
          <div>
            <SearchCity displayData={displayData} />
          </div>
        </div>
      ) : (
        <div className="main-content screen">
          {!isLoading && (
            <button
              className="back-btn"
              onClick={() => {
                setIsSearching(true);
                setIsLoading(false);
              }}
            >
              Back
            </button>
          )}

          {isLoading ? (
            <div class="loader"></div>
          ) : (
            weather.length > 0 && <WeatherCarousel weatherData={weather} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
