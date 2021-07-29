import NoDataIcon from 'url:../assets/qualityStatus/noData.svg';
import VeryGoodIcon from 'url:../assets/qualityStatus/0.svg';
import GoodIcon from 'url:../assets/qualityStatus/1.svg';
import NeutralIcon from 'url:../assets/qualityStatus/2.svg';
import BadIcon from 'url:../assets/qualityStatus/3.svg';
import VeryBadIcon from 'url:../assets/qualityStatus/4.svg';
import CriticalIcon from 'url:../assets/qualityStatus/5.svg';

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
