import NoDataIcon from 'url:../assets/qualityStatus/noData.svg';
import VeryGoodIcon from 'url:../assets/qualityStatus/0.svg';
import GoodIcon from 'url:../assets/qualityStatus/1.svg';
import NeutralIcon from 'url:../assets/qualityStatus/2.svg';
import BadIcon from 'url:../assets/qualityStatus/3.svg';
import VeryBadIcon from 'url:../assets/qualityStatus/4.svg';
import CriticalIcon from 'url:../assets/qualityStatus/5.svg';
import ozoneIcon from 'url:../assets/sensors/ozone.svg';
import suplhurIcon from 'url:../assets/sensors/so2.svg';
import nitroIcon from 'url:../assets/sensors/no2.svg';
import dustIcon from 'url:../assets/sensors/pm10.svg';
import aerosolIcon from 'url:../assets/sensors/pm25.svg';

export const getIcon = (statusId) => {
  switch (statusId) {
    case '0':
      return VeryGoodIcon;
    case '1':
      return GoodIcon;
    case '2':
      return NeutralIcon;
    case '3':
      return BadIcon;
    case '4':
      return VeryBadIcon;
    case '5':
      return CriticalIcon;
    case 'noData':
      return NoDataIcon;
    case 'so2':
      return suplhurIcon;
    case 'no2':
      return nitroIcon;
    case 'o3':
      return ozoneIcon;
    case 'pm10':
      return dustIcon;
    case 'pm25':
      return aerosolIcon;
  }
};
