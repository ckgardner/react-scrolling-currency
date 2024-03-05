import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import "./styles.css";
import { formatCurrencyForDisplay, formatNumberForDisplay } from "./utils/formatForDisplay";
import { getCurrencySymbol } from "./utils/getCurrencySymbol";

const DecimalColumn = () => (
  <div>
    <span>.</span>
  </div>
);

const CommaColumn = () => (
  <div>
    <span>,</span>
  </div>
);

const SpaceColumn = () => (
  <div>
    <span>&nbsp;</span>
  </div>
);

const NumberColumn = ({ digit }: { digit: string }) => {
  const [position, setPosition] = useState(0);
  const columnContainer = useRef<HTMLDivElement | null>(null);

  const setColumnToNumber = (num: string) => {
    if (columnContainer.current) {
      setPosition(columnContainer.current.clientHeight * parseInt(num, 10));
    }
  };

  useEffect(() => {
    setColumnToNumber(digit);
  }, [digit]);

  return (
    <div ref={columnContainer} className="tickerColumnContainer">
      <motion.div animate={{ y: position }} className="tickerColumn" transition={{ ease: "easeOut", type: "tween" }}>
        {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
          <div key={`column-${num}`} className="tickerDigit">
            <span>{num}</span>
          </div>
        ))}
      </motion.div>

      <span className="numberPlaceholder">0</span>
    </div>
  );
};

const renderColumn = (value: string, index: number) => {
  switch (value) {
    case ".":
      return <DecimalColumn key={`column-${value}-${index}`} />;
    case ",":
      return <CommaColumn key={`column-${value}-${index}`} />;
    case " ":
      return <SpaceColumn key={`column-${value}-${index}`} />;
    default:
      return <NumberColumn key={`column-${value}-${index}`} digit={value} />;
  }
};

export const ScrollingNumber = ({
  number,
  isCurrency = true,
  locale = "en-US",
  currencyCode = "USD",
}: {
  /**
   * @example 1055.35 or 1055
   * @returns currency with animation
   */
  number: number;
  /**
   * @description determines if the scrolling number is a currency or plain number
   * @default true
   */
  isCurrency?: boolean;
  /**
   * @description if a locale is passed, it will format the number based on the locale.
   * @default "en-US"
   */
  locale?: string;
  /**
   * @description currency code to be used for formatting
   * @default "USD"
   */
  currencyCode?: string;
}) => {
  const absoluteValue = Math.abs(number);

  const formattedCurrency =
    isCurrency &&
    new Intl.NumberFormat(locale, {
      currency: currencyCode,
      style: "currency",
    }).format(absoluteValue);
  const currencySymbol = formattedCurrency && getCurrencySymbol(formattedCurrency);
  console.log(absoluteValue);

  const numArray = isCurrency && formattedCurrency ? formatCurrencyForDisplay(formattedCurrency) : formatNumberForDisplay(absoluteValue);

  const isNegative = number < 0;

  return (
    <div className="tickerView">
      {/* The numbers and symbol are styled using "flex: reverse" */}
      {numArray.map((num, index) => renderColumn(num, index))}
      {isCurrency && currencySymbol}
      {isNegative && "-"}
    </div>
  );
};
