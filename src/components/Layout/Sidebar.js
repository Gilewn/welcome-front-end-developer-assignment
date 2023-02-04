import classes from './Sidebar.module.css';

import appLogo from '../../assets/logo.svg';
import liveViewLogo from '../../assets/live-view.svg';
import scheduledLogo from '../../assets/scheduled.svg';
import statisticsLogo from '../../assets/statistics.svg';
import revenueLogo from '../../assets/revenue.svg';
import settingsLogo from '../../assets/settings.svg';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes['app-logo']}>
        <img src={appLogo} alt='app logo' />
      </div>
      <div className={classes['app-nav-container']}>
        <img src={liveViewLogo} alt='live view logo' />
        <span>
          <img
            src={scheduledLogo}
            alt='scheduled logo'
            className={classes.active}
          />
        </span>
        <img src={statisticsLogo} alt='statistics logo' />
        <img src={revenueLogo} alt='revenue logo' />
        <img src={settingsLogo} alt='settings logo' />
      </div>
    </div>
  );
};

export default Sidebar;
