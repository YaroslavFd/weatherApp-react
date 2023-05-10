import Info from "./Info";
import Details from "./Details";

import "./styles.css";

const Content = ({ store }) => {
  return (
    <>
      <Info store={store} />
      <Details store={store} />
    </>
  );
};

export default Content;
