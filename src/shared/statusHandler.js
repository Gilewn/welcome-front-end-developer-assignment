import arrivingLogo from '../assets/arriving.svg';
import departingLogo from '../assets/departing.svg';
import inCityLogo from '../assets/in-city.svg';

export const statusHandler = (status) => {
  switch (status) {
    case 'Departure':
      return <img src={departingLogo} alt='departing logo' />;
    case 'Arrival':
      return <img src={arrivingLogo} alt='arriving logo' />;
    case 'In City':
      return <img src={inCityLogo} alt='in city logo' />;
    default:
      break;
  }
};
