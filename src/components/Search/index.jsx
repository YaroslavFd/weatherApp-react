import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as LocationPin } from "../../assets/icons/location-pin.svg";
import "./styles.css";

const Search = ({ inputValue, setInputValue, handlerSubmit }) => {
  return (
    <form className="search-box" onSubmit={(e) => handlerSubmit(e, inputValue)}>
      <LocationPin className="search-icon" />
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Enter your location"
      />
      <button className="search-btn">
        <SearchIcon className="search-icon" />
      </button>
    </form>
  );
};

export default Search;
