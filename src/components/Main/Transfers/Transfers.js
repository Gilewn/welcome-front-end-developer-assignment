import TransfersInfoBar from './TransfersInfoBar';
import TransfersList from './TransfersList';

import { literals } from '../../../shared/literals';

import classes from './Transfers.module.css';

const Transfers = () => {
  return (
    <div className={classes.transfers}>
      <h1>{literals.transfers.transfersHeadline}</h1>
      <TransfersInfoBar />
      <TransfersList />
    </div>
  );
};

export default Transfers;
