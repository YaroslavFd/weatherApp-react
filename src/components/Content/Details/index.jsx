import { ReactComponent as Wind } from "../../../assets/icons/wind.svg";
import { ReactComponent as Humidity } from "../../../assets/icons/humidity.svg";

import "./styles.css";

const Details = ({ store }) => {
  return (
    <div className="weather-details">
      <div className="humidity">
        <Humidity />
        <div className="text">
          <span>{store.humidity}%</span>
          <p>Humidity</p>
        </div>
      </div>
      <div className="wind">
        <Wind />
        <div className="text">
          <span>{store.windSpeed} Km/h</span>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
