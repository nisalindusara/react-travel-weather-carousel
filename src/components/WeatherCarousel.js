import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "../styles/WeatherCarousel.css";

//Importing Icons
import { ReactComponent as ClearIcon } from "../assets/clear-day.svg";
import { ReactComponent as PCloudyIcon } from "../assets/partly-cloudy-day.svg";
import { ReactComponent as MCloudyIcon } from "../assets/cloudy.svg";
import { ReactComponent as CloudyIcon } from "../assets/cloudy.svg";
import { ReactComponent as LRainIcon } from "../assets/light-rain.svg";
import { ReactComponent as OShowerIcon } from "../assets/light-rain.svg";
import { ReactComponent as IShowerIcon } from "../assets/light-rain.svg";
import { ReactComponent as RainIcon } from "../assets/extreme-rain.svg";
import { ReactComponent as LSnowIcon } from "../assets/snow.svg";
import { ReactComponent as SnowIcon } from "../assets/extreme-snow.svg";
import { ReactComponent as tsIcon } from "../assets/thunderstorms.svg";
import { ReactComponent as tsRainIcon } from "../assets/thunderstorms-rain.svg";

export default function WeatherCarousel({ weatherData }) {
  const formatDate = (dateInt) => {
    const dateStr = dateInt.toString();
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6) - 1;
    const day = dateStr.substring(6, 8);
    return new Date(year, month, day).toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const weatherIcons = {
    clear: ClearIcon,
    pcloudy: PCloudyIcon,
    mcloudy: MCloudyIcon,
    cloudy: CloudyIcon,
    lightrain: LRainIcon,
    oshower: OShowerIcon,
    ishower: IShowerIcon,
    rain: RainIcon,
    lightsnow: LSnowIcon,
    snow: SnowIcon,
    ts: tsIcon,
    tsrain: tsRainIcon,
  };

  return (
    <div className="carousel-container">
      <Swiper
        className="swiper-container"
        direction={"vertical"}
        spaceBetween={0}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        speed={600}
        freeMode={{
          enabled: true,
          sticky: true,
          momentumRatio: 0.3,
          momentumVelocityRatio: 0.3,
        }}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -40,
          depth: 120,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Mousewheel, FreeMode]}
      >
        {weatherData.map((dayData, index) => {
          const WeatherIconComponent = weatherIcons[dayData.weather];
          return (
            <SwiperSlide key={index}>
              <div className="weather-card-inner">
                <div className="card-header">
                  <div className="card-header-left">
                    <span className="card-icon">
                      {WeatherIconComponent && (
                        <WeatherIconComponent className="my-custom-svg-class" />
                      )}
                    </span>
                    <p className="card-weather">{dayData.weather}</p>
                  </div>
                  <div className="card-header-right">
                    <h3>{formatDate(dayData.date)}</h3>
                  </div>
                </div>
                <div className="card-content">
                  <h1>{dayData.temp2m.max}°</h1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
