import { dateHandler } from '../../../../shared/dateHandler';
import { statusHandler } from '../../../../shared/statusHandler';
import { opportunitiesHandler } from '../../../../shared/opportunitiesHandler';
import { groupedTransfers } from '../../../../shared/groupByDateHandler';
import { stringLengthHandler } from '../../../../shared/stringLengthHandler';

import calendarLogo from '../../../../assets/calendar-icon.svg';

import classes from './TransfersList.module.css';

const TransfersList = (props) => {
  const { onShow, getTransfer } = props;

  const getTransferDetailsHandler = (transfer) => {
    getTransfer(transfer);
    onShow();
  };

  const transfersList = groupedTransfers.map((transfers, index) => (
    <div key={index}>
      <div className={classes['transfer-date']}>
        <img src={calendarLogo} alt='calendar logo' />
        <h1>{dateHandler(transfers.date)}</h1>
      </div>
      {transfers.transfer.map((transfer) => (
        <div key={transfer.id}>
          <div
            className={classes['list-item']}
            onClick={() => getTransferDetailsHandler(transfer)}
          >
            <div className={classes['status-container']}>
              {statusHandler(transfer.category.toString())}
            </div>

            <div className={classes['traveler-photo']}>
              <img
                src={transfer.traveler_photo}
                alt={transfer.traveler_photo}
              />

              <div className={classes['traveler-name']}>
                <h1>{transfer.traveler_first_name}</h1>
                <h1>{transfer.traveler_last_name}</h1>
              </div>
            </div>

            <div className={classes.property}>
              <h2>PROPERTY</h2>
              <h1>{transfer.property_title}</h1>
            </div>

            <div className={classes['arrival-departure']}>
              <h2>ARRIVAL TIME </h2>
              <h1>{dateHandler(transfer.datetime, true)}</h1>
            </div>

            <div className={classes['from-to']}>
              <h2>ARRIVAL TIME </h2>
              <h1>{stringLengthHandler(transfer.location_title)}</h1>
            </div>

            <div className={classes.opportunities}>
              <h2>OPPORTUNITIES</h2>
              {opportunitiesHandler(
                transfer.babies,
                transfer.early_checkin,
                transfer.late_checkout,
                transfer.return_transfer
              ).map((opportunity, index) => (
                <span key={index}>{opportunity}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  ));

  return <div className={classes.list}>{transfersList}</div>;
};

export default TransfersList;
