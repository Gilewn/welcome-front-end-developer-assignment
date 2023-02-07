const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const dateHandler = (date, full) => {
  const today = new Date();
  const transferDate = new Date(date);

  const getWeekDayHandler = () => {
    let transferDay = '';

    if (
      today.getDate() === transferDate.getDate() &&
      today.getMonth() === transferDate.getMonth() &&
      today.getFullYear() === transferDate.getFullYear()
    ) {
      transferDay = 'Today';
      return transferDay;
    } else if (
      today.getDate() - transferDate.getDate() === -1 &&
      today.getMonth() === transferDate.getMonth() &&
      today.getFullYear() === transferDate.getFullYear()
    ) {
      transferDay = 'Tomorrow';
      return transferDay;
    } else {
      transferDay = full
        ? weekday[transferDate.getDay()].substring(0, 3)
        : weekday[transferDate.getDay()] +
          ', ' +
          transferDate.getDate() +
          ' ' +
          monthNames[transferDate.getMonth()];
      return transferDay;
    }
  };

  let formattedDate;

  if (full) {
    formattedDate =
      getWeekDayHandler() +
      ', ' +
      transferDate.getDate() +
      ' ' +
      monthNames[transferDate.getMonth()] +
      ', ' +
      transferDate.getUTCHours() +
      ':' +
      transferDate.getUTCMinutes();
  } else {
    formattedDate = getWeekDayHandler();
  }

  return formattedDate;
};
