import React, { useEffect, useRef, useState } from 'react';

import { formatNumberForDisplay } from 'src/utils/formatForDisplay';
import { getCurrencySymbol } from 'src/utils/getCurrencySymbol';

import './styles.css';
import { motion } from 'framer-motion';

const SymbolColumn = ({ symbol }: { symbol: string }) => (
  <div>
    <span>{symbol}</span>
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
      <motion.div
        animate={{ y: position }}
        className="tickerColumn"
        transition={{ ease: 'easeOut', type: 'tween' }}
      >
        {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map(num => (
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
  const symbols = ['.', ',', ' '];
  if (symbols.includes(value)) {
    return <SymbolColumn key={`column-${value}-${index}`} symbol={value} />;
  }
  return <NumberColumn key={`column-${value}-${index}`} digit={value} />;
};

const ScrollingNumber = ({
  className,
  currencyCode = 'USD',
  hideCurrencyCode = false,
  isCurrency = true,
  locale = 'en-US',
  number,
}: {
  className?: string;
  /**
   * @description currency code to be used for formatting
   * @default "USD"
   */
  currencyCode?: string;
  /**
   * @description determines if the currency code should be displayed after the number
   * @default true
   */
  hideCurrencyCode?: boolean;
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
   * @example 1055.35 or 1055
   * @returns currency with animation
   */
  number: number;
}) => {
  const absoluteValue = Math.abs(number);

  const formattedCurrency =
    isCurrency &&
    new Intl.NumberFormat(locale, {
      currency: currencyCode,
      style: 'currency',
    }).format(absoluteValue);
  const currencySymbol =
    formattedCurrency && getCurrencySymbol(formattedCurrency);

  const formattedNumber =
    !isCurrency && Math.abs(absoluteValue).toLocaleString();
  const numArray = formatNumberForDisplay(
    formattedCurrency || formattedNumber || '',
  );

  const isNegative = number < 0;

  return (
    <div className={`${className} ${'tickerView'}`}>
      {/* The numbers and symbol are styled using "flex: reverse" */}
      {!hideCurrencyCode && isCurrency && ` ${currencyCode.toUpperCase()}`}
      {numArray.map((num, index) => renderColumn(num, index))}
      {isCurrency && currencySymbol}
      {isNegative && '-'}
    </div>
  );
};

export default ScrollingNumber;
