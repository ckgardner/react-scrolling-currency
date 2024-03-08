export const formatCurrencyForDisplay = (numberString: string) => {
  const cleanedNumberString = numberString.replace(/[^0-9.,-\s]/g, '');
  return cleanedNumberString.split('').reverse();
};

export const formatNumberForDisplay = (number: number) => {
  const maxNumber = Math.max(number, 0);
  const formattedNumber = Number.isInteger(maxNumber)
    ? maxNumber.toString()
    : maxNumber.toFixed(2);
  return formattedNumber.split('').reverse();
};
