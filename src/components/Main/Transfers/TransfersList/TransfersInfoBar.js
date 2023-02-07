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
      <div style={{ width: '20%', display: 'flex', alignItems: 'center' }}>
        <p style={{ marginRight: 4 }}>
          {literals.transfers.infoBar.opportunities}
        </p>
        <p
          style={{
            background: '#FFC149',
            boxShadow: '0px 1px 3px #FFC149',
            borderRadius: '2px',
            fontWeight: 700,
            fontSize: '10px',
            lineHeight: '12px',
            color: '#FFF',
            padding: '4px',
          }}
        >
          {literals.transfers.infoBarTags.new}
        </p>
      </div>
    </div>
  );
};

export default TransfersInfoBar;
