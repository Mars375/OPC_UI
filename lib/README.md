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
- [Contributing](#contributing)
- [License](#license)

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

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information on how to contribute.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
