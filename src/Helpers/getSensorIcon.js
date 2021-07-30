import ozoneIcon from 'url:../assets/sensors/ozone.svg';
import suplhurIcon from 'url:../assets/sensors/so2.svg';
import nitroIcon from 'url:../assets/sensors/no2.svg';
import dustIcon from 'url:../assets/sensors/pm10.svg';
import earosolIcon from 'url:../assets/sensors/pm25.svg';

export const getStatusIcon = (statusId) => {
  const statusImageElement = (icon) => `
    <img src=${icon} alt=${`${icon} air icon`}>
  `;

  switch (statusId) {
    case '0':
      return statusImageElement(VeryGoodIcon);
    case '1':
      return statusImageElement(GoodIcon);
    case '2':
      return statusImageElement(NeutralIcon);
    case '3':
      return statusImageElement(BadIcon);
    case '4':
      return statusImageElement(VeryBadIcon);
    case '5':
      return statusImageElement(CriticalIcon);
    default:
      return statusImageElement(NoDataIcon);
  }
};
