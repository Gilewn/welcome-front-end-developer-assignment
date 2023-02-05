import classes from './Header.module.css';

import profileLogo from '../../assets/profile.svg';
import logOutLogo from '../../assets/log-out.svg';

const Header = () => {
  return (
    <div className={classes.header}>
      <img src={profileLogo} alt='profile logo' />
      <img src={logOutLogo} alt='logout logo' />
    </div>
  );
};

export default Header;
