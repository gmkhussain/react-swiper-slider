import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "swiper/css";
import Card from "./Cards";
import "./styles.css";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Card />
  </StrictMode>,
  rootElement
);
