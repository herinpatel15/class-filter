
# Class Filter

## Tailwind CSS Class Merger for React Components

**Class Filter** is a lightweight utility that merges Tailwind CSS classes, ensuring no duplicates or conflicts when combining default and additional classes in React components. Perfect for maintaining a clean and efficient class structure in your projects.

## Features

- **Class Conflict Resolution**: Automatically replaces conflicting Tailwind classes, retaining the latest ones.
- **Simplified Integration**: Easily merge default classes with additional ones passed as props.
- **React Optimized**: Ideal for use in React components where default styling needs to be extended or overridden.

## Installation

Install via npm:

```bash
npm install class-filter
```

Or via Yarn:

```bash
yarn add class-filter
```

## Usage

### Basic Example

The `cf` function (`cf` stands for "class filter") helps you merge two sets of classes, ensuring that only one version of each class type is present.

```tsx
import React from 'react';
import { cf } from 'class-filter';

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ className = "", children }) => {
  const defaultClasses = "px-4 py-2 rounded bg-blue-500 text-white";
  const finalClassName = cf(defaultClasses, className);

  return <button className={finalClassName}>{children}</button>;
};

const ButtonExample: React.FC = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Button Example</h1>
    
    <Button>Default Button</Button>
    <Button className="bg-red-500 mt-4">Red Button</Button>
    <Button className="mt-4 p-4">Padded Button</Button>
    <Button className="mt-4 text-black">Black Text Button</Button>
  </div>
);

export default ButtonExample;
```

### Explanation

- **Default Classes**: The `Button` component starts with a base set of classes.
- **Extra Classes**: Additional classes are passed via the `className` prop.
- **Conflict Resolution**: The `cf` function merges these, resolving conflicts by using the classes from `className` over those in `defaultClasses`.

### Why Use Class Filter?

When building React components with Tailwind CSS, you often have a set of default styles but want to allow users to override or extend them. The `cf` function makes it easy to merge these classes without worrying about duplicates or conflicts.

### Real-World Use Cases

- **Reusable Components**: Create components with sensible defaults that can easily be customized by passing additional Tailwind classes.
- **Consistent Styling**: Maintain consistent styling across your application by ensuring that only one version of each class type is applied.
- **Improved Maintainability**: By using the `cf` function, you reduce the risk of conflicting styles, making your code easier to maintain.

## Advanced Usage

In scenarios where more complex class merging is required, such as conditional styling, you can use `cf` to dynamically generate the final class string:

```tsx
const isActive = true;

<Button className={cf("bg-gray-200", isActive ? "bg-green-500" : "bg-red-500")}>
  Conditional Button
</Button>
```

This flexibility allows you to build more dynamic and responsive UIs with ease.

## License

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for more details.

## Contributing

Contributions are welcome! If you have ideas for improvements or run into any issues, please open an issue or submit a pull request.
