export const stringLengthHandler = (string) => {
  if (string.trim().length > 15) {
    return string.substring(0, 15) + '...';
  }

  return string;
};
