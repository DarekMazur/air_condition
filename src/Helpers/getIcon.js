import NoDataIcon from "../assets/qualityStatus/noData.svg";
import VeryGoodIcon from "../assets/qualityStatus/0.svg";
import GoodIcon from "../assets/qualityStatus/1.svg";
import NeutralIcon from "../assets/qualityStatus/2.svg";
import BadIcon from "../assets/qualityStatus/3.svg";
import VeryBadIcon from "../assets/qualityStatus/4.svg";
import CriticalIcon from "../assets/qualityStatus/5.svg";
import ozoneIcon from "../assets/sensors/ozone.svg";
import suplhurIcon from "../assets/sensors/so2.svg";
import nitroIcon from "../assets/sensors/no2.svg";
import dustIcon from "../assets/sensors/pm10.svg";
import aerosolIcon from "../assets/sensors/pm25.svg";

export const getIcon = (statusId) => {
  switch (statusId) {
    case "0":
      return VeryGoodIcon;
    case "1":
      return GoodIcon;
    case "2":
      return NeutralIcon;
    case "3":
      return BadIcon;
    case "4":
      return VeryBadIcon;
    case "5":
      return CriticalIcon;
    case "noData":
      return NoDataIcon;
    case "so2":
      return suplhurIcon;
    case "no2":
      return nitroIcon;
    case "o3":
      return ozoneIcon;
    case "pm10":
      return dustIcon;
    case "pm25":
      return aerosolIcon;
  }
};
