export const formatCurrencyForDisplay = (numberString: string) => {
  const cleanedNumberString = numberString.replace(/[^0-9.,-\s]/g, '');
  return cleanedNumberString.split('').reverse();
};

export const formatNumberForDisplay = (number: number) =>
  parseFloat(Math.max(number, 0).toString()).toFixed(2).split('').reverse();
