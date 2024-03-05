import { formatCurrencyForDisplay, formatNumberForDisplay } from "../formatForDisplay";

describe("formatCurrencyForDisplay", () => {
  const currencyTestCases = [
    { input: "$1,234.56", expected: ["6", "5", ".", "4", "3", "2", ",", "1"] },
    { input: "€1.234,56", expected: ["6", "5", ",", "4", "3", "2", ".", "1"] },
    { input: "£1 234.56", expected: ["6", "5", ".", "4", "3", "2", " ", "1"] },
    { input: "¥1,234", expected: ["4", "3", "2", ",", "1"] },
  ];

  currencyTestCases.forEach(({ input, expected }) => {
    test(`formatCurrencyForDisplay transforms ${input} correctly`, () => {
      expect(formatCurrencyForDisplay(input)).toEqual(expected);
    });
  });
});

describe("formatNumberForDisplay", () => {
  const numberTestCases = [
    { input: 1234.56, expected: ["6", "5", ".", "4", "3", "2", "1"] },
    { input: 0, expected: ["0", "0", ".", "0"] },
    { input: 1234, expected: ["0", "0", ".", "4", "3", "2", "1"] },
    { input: 1234.567, expected: ["7", "5", ".", "4", "3", "2", "1"] },
  ];

  numberTestCases.forEach(({ input, expected }) => {
    test(`formatNumberForDisplay transforms ${input} correctly`, () => {
      expect(formatNumberForDisplay(input)).toEqual(expected);
    });
  });
});
