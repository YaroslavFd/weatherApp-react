import "./styles.css";

const Info = ({ store }) => {
  return (
    <div className="weather-box">
      <img src={store.src} alt="img" />
      <p className="temperature">
        {store.temperature}
        <span>°C</span>
      </p>
      <p className="description">{store.description}</p>
    </div>
  );
};

export default Info;
