import arrivingLogo from '../assets/arriving.svg';
import departingLogo from '../assets/departing.svg';
import inCityLogo from '../assets/in-city.svg';

export const statusHandler = (status) => {
  switch (status) {
    case 'Departure':
      return (
        <section
          style={{
            backgroundColor: '#FE6685',
          }}
        >
          <img src={departingLogo} alt='departing logo' />
          <h3>Departing</h3>
        </section>
      );
    case 'Arrival':
      return (
        <section
          style={{
            backgroundColor: '#56a7fa',
          }}
        >
          <img src={arrivingLogo} alt='arriving logo' />
          <h3>Arriving</h3>
        </section>
      );
    case 'In City':
      return (
        <section
          style={{
            backgroundColor: '#736BFF',
          }}
        >
          <img src={inCityLogo} alt='in city logo' />
          <h3>In City</h3>
        </section>
      );
    default:
      break;
  }
};
