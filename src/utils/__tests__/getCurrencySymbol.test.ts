import { getCurrencySymbol } from "../getCurrencySymbol";

describe("getCurrencySymbol", () => {
  const testCases = [
    { input: "$1,234.56", expected: "$" },
    { input: "€1.234,56", expected: "€" },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`getCurrencySymbol extracts ${expected} from ${input}`, () => {
      expect(getCurrencySymbol(input)).toBe(expected);
    });
  });
});
