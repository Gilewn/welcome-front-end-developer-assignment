import { DUMMY_TRANSFERS_LIST } from '../../../shared/transfers_list';

import classes from './TransfersList.module.css';

const TransfersList = () => {
  const transfersList = DUMMY_TRANSFERS_LIST.map((transfer) => (
    <div>{transfer.traveler_first_name}</div>
  ));

  return <div className={classes.list}>{transfersList}</div>;
};

export default TransfersList;
