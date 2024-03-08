import {
  formatCurrencyForDisplay,
  formatNumberForDisplay,
} from 'src/utils/formatForDisplay';

describe('formatCurrencyForDisplay', () => {
  const currencyTestCases = [
    { expected: ['6', '5', '.', '4', '3', '2', ',', '1'], input: '$1,234.56' },
    { expected: ['6', '5', ',', '4', '3', '2', '.', '1'], input: '€1.234,56' },
    { expected: ['6', '5', '.', '4', '3', '2', ' ', '1'], input: '£1 234.56' },
    { expected: ['4', '3', '2', ',', '1'], input: '¥1,234' },
  ];

  currencyTestCases.forEach(({ expected, input }) => {
    test(`formatCurrencyForDisplay transforms ${input} correctly`, () => {
      expect(formatCurrencyForDisplay(input)).toEqual(expected);
    });
  });
});

describe('formatNumberForDisplay', () => {
  const numberTestCases = [
    { expected: ['6', '5', '.', '4', '3', '2', '1'], input: 1234.56 },
    { expected: ['0'], input: 0 },
    { expected: ['4', '3', '2', '1'], input: 1234 },
    { expected: ['7', '5', '.', '4', '3', '2', '1'], input: 1234.567 },
  ];

  numberTestCases.forEach(({ expected, input }) => {
    test(`formatNumberForDisplay transforms ${input} correctly`, () => {
      expect(formatNumberForDisplay(input)).toEqual(expected);
    });
  });
});
