import { getApiData } from "../../Helpers/getApiData";
import { getStationData } from "../../Helpers/getStationData";
import { handleSelect } from "../../Helpers/handleSelect";
import { hasError } from "../../Helpers/hasError";
import { renderElement } from "../../Helpers/renderElement";
import { renderResuts } from "../../Helpers/renderResuts";
import { renderSelect } from "../../Helpers/renderSelect";
import { language } from "../../utils/constans";
import { Loader } from "../Loader/Loader";

import "./Form.style.scss";

export const Form = () => {
  const selectValues = {
    province: "",
    city: "",
    station: "",
  };

  renderElement(
    "form",
    ["form__wrapper"],
    document.querySelector(".main__wrapper")
  );
  renderElement(
    "select",
    ["form__select", "select__province"],
    document.querySelector(".form__wrapper")
  );

  renderElement(
    "option",
    [],
    document.querySelector(".select__province"),
    language[window.localStorage.lang].province
  );
  getApiData("province").then((response) => {
    try {
      response.map((province) => {
        renderElement(
          "option",
          [],
          document.querySelector(".select__province"),
          province
        );
      });
    } catch (err) {
      hasError();
      console.log(err);
    }
  });

  renderElement(
    "select",
    ["form__select", "select__city", "select__city--inactive"],
    document.querySelector(".form__wrapper")
  );

  renderElement(
    "select",
    ["form__select", "select__station", "select__station--inactive"],
    document.querySelector(".form__wrapper")
  );

  renderSelect("city", "province", selectValues.province);
  renderSelect("station", "city", selectValues.city);

  document
    .querySelector(".select__province")
    .addEventListener(
      "change",
      handleSelect("province", "city", selectValues.province)
    );

  document
    .querySelector(".select__city")
    .addEventListener(
      "change",
      handleSelect("city", "station", selectValues.city)
    );

  document.querySelector(".select__station").addEventListener("change", (e) => {
    e.target.value !== language[window.localStorage.lang].station
      ? ((selectValues.station = e.target.value),
        Loader(),
        getApiData("sensor", "station", selectValues.station)
          .then((resolve) => getStationData(resolve))
          .then((data) => {
            (document.querySelector(".quality__wrapper").innerHTML = ""),
              renderResuts(data, selectValues.station);
          }))
      : null;
  });
};
