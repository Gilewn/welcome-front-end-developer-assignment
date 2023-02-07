import { useState } from 'react';

import TransfersInfoBar from './TransfersList/TransfersInfoBar';
import TransfersList from './TransfersList/TransfersList';
import TransferDetails from './TransferDetails/TransferDetails';
import Pagination from '../../UI/Pagination';

import { literals } from '../../../shared/literals';

import classes from './Transfers.module.css';

const Transfers = () => {
  const [showTransferDetails, setShowTransferDetails] = useState(false);
  const [transfer, setTransfer] = useState();

  const showModalHandler = () => {
    setShowTransferDetails(true);
  };

  const hideModalHandler = () => {
    setShowTransferDetails(false);
  };

  return (
    <div className={classes.transfers}>
      {showTransferDetails && (
        <TransferDetails transfer={transfer} onClose={hideModalHandler} />
      )}
      <h1 className={classes.headline}>
        {literals.transfers.transfersHeadline}
      </h1>
      <TransfersInfoBar />
      <TransfersList onShow={showModalHandler} getTransfer={setTransfer} />
      <Pagination />
    </div>
  );
};

export default Transfers;
