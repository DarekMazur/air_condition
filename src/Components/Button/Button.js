import { renderElement } from "../../Helpers/renderElement";
import { language } from "../../utils/constans";

import "./Button.style.scss";

export const Button = (tag) => {
  const buttonType = {
    geo: {
      class: ["geolocation__button"],
      deck: document.querySelector(".geolocation__wrapper"),
      body: language[window.localStorage.lang].geoButton,
    },
    reset: {
      class: ["reset__button", "reset__button--inactive"],
      deck: document.querySelector(".main__wrapper"),
      body: "RESET",
    },
  };

  renderElement(
    "button",
    buttonType[tag].class,
    buttonType[tag].deck,
    buttonType[tag].body
  );
};
