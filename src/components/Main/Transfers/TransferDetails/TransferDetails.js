import { useState, useEffect } from 'react';

import Modal from '../../../UI/Modal';

import { literals } from '../../../../shared/literals';
import { DUMMY_TRANSFERS_DETAILS } from '../../../../shared/transfers_details';
import { DUMMY_TRANSFERS_LIST } from '../../../../shared/transfers_list';
import { opportunitiesHandler } from '../../../../shared/opportunitiesHandler';
import { dateHandler } from '../../../../shared/dateHandler';

import transferLogo from '../../../../assets/transfer-icon.svg';
import passengersLogo from '../../../../assets/passengers.svg';
import childSeatLogo from '../../../../assets/child-seat.svg';
import luggageLogo from '../../../../assets/luggage.svg';
import handLuggageLogo from '../../../../assets/hand-luggage.svg';
import takeOffLogo from '../../../../assets/takeoff-icon.svg';
import timeIconLogo from '../../../../assets/time-icon.svg';
import closeLogo from '../../../../assets/x-icon.svg';
import leftArrow from '../../../../assets/left-arrow.svg';
import rightArrow from '../../../../assets/right-arrow.svg';

import classes from './TransferDetails.module.css';

const TransferDetails = (props) => {
  const { transfer, onClose, onSetTransfer } = props;
  const [transferDetails, setTransferDetails] = useState();
  let layout;

  useEffect(() => {
    setTransferDetails(
      DUMMY_TRANSFERS_DETAILS.find(
        (transferDetails) => transferDetails.id === transfer.id
      )
    );
  }, [transfer]);

  const transferDetailsSliderHandler = (transferId, type) => {
    if (type === 'next' && transferId !== 6) {
      const nextTransferDetails = DUMMY_TRANSFERS_DETAILS.find(
        (transfer) => transfer.id === transferId + 1
      );

      const nextTransfer = DUMMY_TRANSFERS_LIST.find(
        (transfer) => transfer.id === transferId + 1
      );

      setTransferDetails(nextTransferDetails);
      onSetTransfer(nextTransfer);
    }

    if (type === 'prev' && transferId !== 1) {
      const prevTransferDetails = DUMMY_TRANSFERS_DETAILS.find(
        (transfer) => transfer.id === transferId - 1
      );

      const prevTransfer = DUMMY_TRANSFERS_LIST.find(
        (transfer) => transfer.id === transferId - 1
      );

      setTransferDetails(prevTransferDetails);
      onSetTransfer(prevTransfer);
    }
  };

  if (transferDetails) {
    layout = (
      <div className={classes.details}>
        <img
          src={closeLogo}
          alt='close logo'
          className={classes['close-btn']}
          onClick={onClose}
        />
        <img
          src={leftArrow}
          alt='left arrow'
          className={classes['left-arrow']}
          onClick={() =>
            transferDetailsSliderHandler(transferDetails.id, 'prev')
          }
          style={{
            backgroundColor:
              transferDetails.id === 1 && 'rgb(255 255 255 / 30%)',
            cursor: transferDetails.id === 1 && 'not-allowed',
          }}
        />
        <img
          src={rightArrow}
          alt='right arrow'
          className={classes['right-arrow']}
          onClick={() =>
            transferDetailsSliderHandler(transferDetails.id, 'next')
          }
          style={{
            backgroundColor:
              transferDetails.id === 6 && 'rgb(255 255 255 / 30%)',
            cursor: transferDetails.id === 6 && 'not-allowed',
          }}
        />
        <div className={classes['left-pane']}>
          <div className={classes['traveler-basic-info']}>
            <img
              src={transfer.traveler_photo}
              alt={transfer.traveler_photo}
              className={classes['traveler-img']}
            />
            <h1>{transfer.traveler_first_name}</h1>
            <h1>{transfer.traveler_last_name}</h1>
          </div>
          <div className={classes.divider} />
          <div className={classes['traveler-extra-info']}>
            <div>
              <span>{literals.transfers.details.phone}</span>
              <h1>{transferDetails.traveler.phone_number}</h1>
            </div>
            <div>
              <span>{literals.transfers.details.email}</span>
              <h1>{transferDetails.traveler.email}</h1>
            </div>
            <div>
              <span>{literals.transfers.details.comingFrom}</span>
              <h1>{transferDetails.traveler.country}</h1>
            </div>
            <div>
              <span>{literals.transfers.details.opportunities}</span>
              {opportunitiesHandler(
                transfer.babies,
                transfer.early_checkin,
                transfer.late_checkout,
                transfer.return_transfer,
                true
              ).map((opportunity, index) => (
                <span key={index}>{opportunity}</span>
              ))}
            </div>
          </div>
        </div>
        <div className={classes['horizontal-divider']} />
        <div className={classes['right-pane']}>
          <h1 className={classes.headline}>
            {literals.transfers.transfersHeadline}
          </h1>
          <div className={classes['transfer-info-container']}>
            <div className={classes['departure-date']}>
              <h1>
                {dateHandler(transferDetails.from_datetime)
                  .split(' ')
                  .slice(1)
                  .reverse()
                  .join(' ')}
              </h1>
            </div>
            <div className={classes['transfer-info']}>
              <img src={transferLogo} alt='transfer logo' />
              <div className={classes['transfer-info-details-container']}>
                <div className={classes['transfer-info-details']}>
                  <div className={classes['location-container']}>
                    <h1>{transferDetails.from_location_title}</h1>
                    <h2>{transferDetails.from_location_address}</h2>
                  </div>
                  <span>
                    {dateHandler(transferDetails.from_datetime, true)
                      .split(' ')
                      .slice(3)
                      .reverse()
                      .join(' ')}
                  </span>
                </div>
                <div className={classes['transfer-info-details']}>
                  <div className={classes['location-container']}>
                    <h1>{transferDetails.to_location_title}</h1>
                    <h2>{transferDetails.to_location_address}</h2>
                  </div>
                  <span>
                    {dateHandler(transferDetails.to_datetime, true)
                      .split(' ')
                      .slice(3)
                      .reverse()
                      .join(' ')}
                  </span>
                </div>
              </div>
            </div>
            <div className={classes['flight-info-container']}>
              <img src={passengersLogo} alt='passengers logo' />
              <span>{transferDetails.passengers}</span>
              <img src={childSeatLogo} alt='child seat logo' />
              <span>{transferDetails.babyseats}</span>
              <img src={luggageLogo} alt='luggage logo' />
              <span>{transferDetails.luggage}</span>
              <img src={handLuggageLogo} alt='hand luggage logo' />
              <span>{transferDetails.hand_luggage}</span>
            </div>
            {transferDetails.flight_status && (
              <div className={classes['flight-info-container']}>
                <img src={takeOffLogo} alt='take off logo' />
                <span>{transferDetails.flight_status.flight_number}</span>
                <div />
                <img src={timeIconLogo} alt='time icon logo' />
                <span>{transferDetails.flight_status.flight_time}</span>
                <div />
                <h3>{transferDetails.flight_status.flight_status}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    layout = <p>Loading...</p>;
  }

  return <Modal onClose={onClose}>{layout}</Modal>;
};

export default TransferDetails;
