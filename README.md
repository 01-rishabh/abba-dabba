# My Custom React Components

Welcome to the **My Custom React Components** package! This package includes a reusable `Button` component and a custom `useCounter` hook for managing a simple counter state. These components are designed to be easily integrated into your React applications.

## Installation

To install the package, use npm or yarn:

```bash
npm install abba-dabba
```

## Usage

### Button Component

The `Button` component is a customizable button with a click event handler. It accepts children (to display the button text or content) and an optional `onClick` function to handle click events.

#### Props

- `children` (ReactNode): The content to be displayed inside the button.
- `onClick` (optional): A function to be called when the button is clicked.

#### Example

```jsx
import React from 'react';
import { Button } from 'my-custom-react-components';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button onClick={handleClick}>Click Me!</Button>
    </div>
  );
};

export default App;
```

### useCounter Hook

The `useCounter` hook provides a simple way to manage a counter state with increment and decrement functions.

#### Return Values

- `count` (number): The current value of the counter.
- `increment` (function): A function to increment the counter by 1.
- `decrement` (function): A function to decrement the counter by 1.

#### Example

```jsx
import React from 'react';
import { useCounter } from 'abba-dabba';

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
```

## Styling

The `Button` component comes with some default styles:

- Background color: `#ff6600`
- Text color: `white`
- Border: `none`
- Border radius: `12px`
- Padding: `10px 20px`
- Font size: `16px`
- Cursor: `pointer`
- Transition: `background-color 0.3s ease`

Feel free to override these styles as needed in your project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

If you would like to contribute to this project, please open an issue or submit a pull request on GitHub.

---

Thank you for using **My Custom React Components**! Happy coding!