import { literals } from '../../../shared/literals';

import classes from './TransfersInfoBar.module.css';

const TransfersInfoBar = () => {
  return (
    <div className={classes['info-bar']}>
      <p>{literals.transfers.infoBar.status}</p>
      <p>{literals.transfers.infoBar.traveller}</p>
      <p>{literals.transfers.infoBar.arrivalDeparture}</p>
      <p>{literals.transfers.infoBar.fromTo}</p>
      <p>{literals.transfers.infoBar.opportunities}</p>
    </div>
  );
};

export default TransfersInfoBar;
