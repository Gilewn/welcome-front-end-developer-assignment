import { DUMMY_TRANSFERS_LIST } from './transfers_list';

const transfers = DUMMY_TRANSFERS_LIST.reduce((groups, transfer) => {
  const date = transfer.datetime.split('T')[0];
  if (!groups[date]) {
    groups[date] = [];
  }
  groups[date].push(transfer);
  return groups;
}, {});

export const groupedTransfers = Object.keys(transfers).map((date) => {
  return {
    date,
    transfer: transfers[date],
  };
});
