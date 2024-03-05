# react-scrolling-currency

`react-scrolling-currency` is an open-source npm package that provides a React component for animating changing currencies and numbers with a scrolling animation. If you love the way Robinhood displays the stock price, this is the component for you.

## Installation

You can install `react-scrolling-currency` into your project using npm:

```bash
npm install react-scrolling-currency
```

## Usage

Here's a basic example of how to use the `ScrollingNumber` component:

```jsx
import { ScrollingNumber } from 'react-scrolling-currency';

function App() {
  return (
    <div className="App">
      <ScrollingNumber number={1234.56} isCurrency={true} locale="en-US" currencyCode="USD" />
    </div>
  );
}

export default App;
```

In this example, the `ScrollingNumber` component is used to display the number `1234.56` as a currency in USD.

### Props

The `ScrollingNumber` component accepts the following props:

* `number`: The number to display. This can be any number, positive or negative.
* `isCurrency` (optional): A boolean that determines if the number should be displayed as a currency. Defaults to true.
* `locale` (optional): The locale to use when formatting the number as a currency. Defaults to "en-US".
* `currencyCode` (optional): The currency code to use when formatting the number as a currency. Defaults to "USD".

### Customization

The `ScrollingNumber` component can be customized in several ways:

* You can change the number to display by changing the `number` prop.
* You can display the number as a plain number instead of a currency by setting the `isCurrency` prop to `false`.
* You can change the locale and currency code by changing the `locale` and `currencyCode` props respectively.

### Styling

The `ScrollingNumber` component uses CSS for styling. You can customize the appearance of the component by overriding the CSS classes in your own stylesheets.

### Dependencies

The `ScrollingNumber` component uses the `framer-motion` library for animations. This dependency is included in the `react-scrolling-currency` package, so you don't need to install it separately.

## Conclusion

The `ScrollingNumber` component is a fun and engaging way to display numbers in your React application. With its customizable props and CSS, you can make it fit perfectly into your project. Enjoy using `react-scrolling-currency`!
