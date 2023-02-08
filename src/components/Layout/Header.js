import classes from './Header.module.css';

import profileLogo from '../../assets/profile.svg';
import logOutLogo from '../../assets/log-out.svg';
import searchLogo from '../../assets/search.svg';
import menuLogo from '../../assets/menu-icon.svg';

const Header = (props) => {
  const { onShowSidebar } = props;

  return (
    <div className={classes.header}>
      <div className={classes.mobile}>
        <img
          src={menuLogo}
          alt='menu logo'
          onClick={() => onShowSidebar(true)}
        />
        <h1>Transfer list</h1>
        <img src={searchLogo} alt='search logo' />
      </div>
      <div className={classes['header-nav']}>
        <img src={profileLogo} alt='profile logo' />
        <img src={logOutLogo} alt='logout logo' />
      </div>
    </div>
  );
};

export default Header;
