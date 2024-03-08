export const getCurrencySymbol = (formattedCurrency: string) =>
  formattedCurrency.replace(/[0-9.,-\s]/g, '');
