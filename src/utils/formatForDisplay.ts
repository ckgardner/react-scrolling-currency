export const formatNumberForDisplay = (numberString: string) => {
  const cleanedNumberString = numberString.replace(/[^0-9.,-\s]/g, '');
  return cleanedNumberString.split('').reverse();
};
