import { getCurrencySymbol } from 'src/utils/getCurrencySymbol';

describe('getCurrencySymbol', () => {
  const testCases = [
    { expected: '$', input: '$1,234.56' },
    { expected: '€', input: '€1.234,56' },
  ];

  testCases.forEach(({ expected, input }) => {
    test(`getCurrencySymbol extracts ${expected} from ${input}`, () => {
      expect(getCurrencySymbol(input)).toBe(expected);
    });
  });
});
