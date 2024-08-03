# OPC React UI Library

Welcome to the OPC React UI component library. This library contains various reusable React components for building modern and responsive user interfaces.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Pagination](#pagination)
  - [Popover](#popover)
  - [Table](#table)
  - [Toast](#toast)
- [Storybook](#storybook)
- [Contributing](#contributing)
- [License](#license)
- [Development Environment](#development-environment)

## Installation

To install the library, use npm or yarn:

```bash
npm install opc-ui
```

or

```bash
yarn add opc-ui
```

## Usage

Here is an example of how to use the components from this library in your React project:

```typescript
import React from "react";
import { Pagination, Popover, Table, Toast, Toaster } from "opc-react-ui";
function App() {
  return (
    <div>
      <h1>Welcome to OPC React UI Library</h1>
      <Pagination />
      <Popover />
      <Table />
      <Toaster />
    </div>
  );
}
export default App;
```

## Components

### Pagination

The `Pagination` component allows navigation between different pages of content.

#### Usage

```typescript
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "opc-react-ui";
function PaginationExample() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious />
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationNext />
      </PaginationContent>
    </Pagination>
  );
}
```

### Popover

The `Popover` component displays contextual content when a trigger element is clicked.

#### Usage

```typescript
import { Popover, PopoverTrigger, PopoverContent } from "opc-react-ui";
import { Button } from "opc-react-ui";
function PopoverExample() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-4">
          <h4 className="text-lg font-medium">Popover Title</h4>
          <p className="text-sm text-muted-foreground">This is the popover content.</p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
```

### Table

The `Table` component allows creating tables with headers, bodies, and footers.

#### Usage

```typescript
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from "opc-react-ui";
function TableExample() {
  return (
    <Table>
      <TableCaption>A simple table example</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Header 1</TableHead>
          <TableHead>Header 2</TableHead>
          <TableHead>Header 3</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Data 1</TableCell>
          <TableCell>Data 2</TableCell>
          <TableCell>Data 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Data 4</TableCell>
          <TableCell>Data 5</TableCell>
          <TableCell>Data 6</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
          <TableCell>Footer 3</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
```

### Toast

The `Toast` component displays temporary notifications.

#### Usage

```typescript
import { Toast, ToastAction, Toaster, useToast } from "opc-react-ui";
import { Button } from "opc-react-ui";
function ToastExample() {
  const { toast } = useToast();
  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
          });
        }}
      >
        Add to calendar
      </Button>
      <Toaster />
    </div>
  );
}
```

## Storybook

We use Storybook for developing and testing our components in isolation. Storybook provides a great way to visualize and interact with your components.

### Running Storybook

To start Storybook, run the following command:

```bash
npm run storybook
```

or

```bash
yarn storybook
```

This will start a local server and open Storybook in your default web browser. You can then navigate through the different stories to see the components in action.

### Building Storybook

To build a static version of Storybook for deployment, run:

```bash
npm run build-storybook
```

or

```bash
yarn build-storybook
```

This will generate a static Storybook site in the `storybook-static` directory, which you can then deploy to any static site hosting service.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information on how to contribute.

### Cloning the Repository

If you want to clone the repository to modify or add new features, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/opc-react-ui.git
```

2. Navigate to the project directory:

```bash
cd opc-react-ui
```

3. Install the dependencies:

```bash
npm install
```

or

```bash
yarn install
```

4. Start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

5. Open Storybook to develop and test components:

```bash
npm run storybook
```

or

```bash
yarn storybook
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Development Environment

### Node Version

This project uses Node.js version 18.12.1. You can check your Node.js version by running:

```bash
node -v
```

### Recommended Text Editor

We recommend using Visual Studio Code (VS Code) for working on this project. You can download it from [here](https://code.visualstudio.com/).

### Editor Configuration

We use the following VS Code extensions and settings for a consistent development environment:

- **ESLint**: For linting JavaScript and TypeScript code.
- **Prettier**: For code formatting.
- **EditorConfig**: For maintaining consistent coding styles between different editors and IDEs.

You can install these extensions from the VS Code marketplace.

### Project Dependencies

This project uses the following dependencies:

- `@radix-ui/react-dialog`: ^1.1.1
- `@radix-ui/react-dropdown-menu`: ^2.1.1
- `@radix-ui/react-label`: ^2.1.0
- `@radix-ui/react-popover`: ^1.1.1
- `@radix-ui/react-toast`: ^1.2.1
- `class-variance-authority`: ^0.7.0
- `clsx`: ^2.1.1
- `cmdk`: ^1.0.0
- `lucide-react`: ^0.418.0
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `tailwind-merge`: ^2.3.0
- `tailwindcss-animate`: ^1.0.7
- `update`: ^0.7.4
- `vite-tsconfig-paths`: ^4.3.2

### Development Dependencies

This project uses the following development dependencies:

- `@chromatic-com/storybook`: ^1.5.0
- `@microsoft/api-extractor`: ^7.47.0
- `@storybook/addon-actions`: ^8.2.7
- `@storybook/addon-essentials`: ^8.2.7
- `@storybook/addon-interactions`: ^8.2.7
- `@storybook/addon-links`: ^8.2.6
- `@storybook/addon-onboarding`: ^8.2.6
- `@storybook/addon-styling-webpack`: ^1.0.0
- `@storybook/addon-themes`: ^8.2.6
- `@storybook/blocks`: ^8.2.6
- `@storybook/react`: ^8.2.7
- `@storybook/react-vite`: ^8.2.7
- `@storybook/test`: ^8.2.7
- `@types/react`: ^18.3.3
- `@types/react-dom`: ^18.3.0
- `@typescript-eslint/eslint-plugin`: ^7.13.1
- `@typescript-eslint/parser`: ^7.13.1
- `@vitejs/plugin-react`: ^4.3.1
- `autoprefixer`: ^10.4.19
- `dts-bundle-generator`: ^9.5.1
- `eslint`: ^8.57.0
- `eslint-plugin-react-hooks`: ^4.6.2
- `eslint-plugin-react-refresh`: ^0.4.7
- `eslint-plugin-storybook`: ^0.8.0
- `postcss`: ^8.4.38
- `rollup-plugin-visualizer`: ^5.12.0
- `storybook`: ^8.2.6
- `tailwindcss`: ^3.4.4
- `tslib`: ^2.6.3
- `typescript`: ^5.5.4
- `vite`: ^5.3.1
- `vite-plugin-compression`: ^0.5.1

[Library Link](https://www.npmjs.com/package/opc-ui?activeTab=readme)
[GitHub Link](https://github.com/Mars375/OPC_UI)
