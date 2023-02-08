import appLogo from '../../assets/logo.svg';
import liveViewLogo from '../../assets/live-view.svg';
import scheduledLogo from '../../assets/scheduled.svg';
import statisticsLogo from '../../assets/statistics.svg';
import revenueLogo from '../../assets/revenue.svg';
import settingsLogo from '../../assets/settings.svg';
import closeLogo from '../../assets/x-icon.svg';

import classes from './Sidebar.module.css';

const Sidebar = (props) => {
  const { showSidebar, onHideSidebar } = props;

  return (
    <>
      <div
        className={showSidebar ? classes.backdrop : ''}
        onClick={() => onHideSidebar(false)}
      />
      <div className={`${classes.sidebar} ${showSidebar ? classes.show : ''}`}>
        <div className={classes['app-logo']}>
          <img src={appLogo} alt='app logo' />
          <div className={classes.mobile}>
            <div>
              <h1>Welcome</h1>
              <h2>FOR PARTNERS</h2>
            </div>
            <img
              src={closeLogo}
              alt='close logo'
              className={classes['close-btn__mobile']}
              onClick={() => onHideSidebar(false)}
            />
          </div>
        </div>
        <div className={classes['app-nav-container']}>
          <div className={classes['mobile-nav']}>
            <img src={liveViewLogo} alt='live view logo' />
            <p>Live view</p>
          </div>
          <div className={classes['mobile-nav']}>
            <span>
              <img
                src={scheduledLogo}
                alt='scheduled logo'
                className={classes.active}
              />
            </span>
            <p>Scheduled</p>
          </div>
          <div className={classes['mobile-nav']}>
            <img src={statisticsLogo} alt='statistics logo' />
            <p>Statistics</p>
          </div>
          <div className={classes['mobile-nav']}>
            <img src={revenueLogo} alt='revenue logo' />
            <p>Revenue</p>
          </div>
          <div className={classes['mobile-nav']}>
            <img src={settingsLogo} alt='settings logo' />
            <p>Settings</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
