import { literals } from '../../../../shared/literals';

import classes from './TransfersInfoBar.module.css';

const TransfersInfoBar = () => {
  return (
    <div className={classes['info-bar']}>
      <p style={{ width: '5%' }}>{literals.transfers.infoBar.status}</p>
      <p style={{ width: '20%' }}>{literals.transfers.infoBar.traveller}</p>
      <p style={{ width: '20%' }}>
        {literals.transfers.infoBar.arrivalDeparture}
      </p>
      <p style={{ width: '20%' }}>{literals.transfers.infoBar.fromTo}</p>
      <p style={{ width: '20%' }}>{literals.transfers.infoBar.opportunities}</p>
    </div>
  );
};

export default TransfersInfoBar;
