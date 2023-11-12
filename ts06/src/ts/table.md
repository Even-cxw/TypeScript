
# Antd接口

- table中`columns`- `ColumnsType`接口

```ts
import { ColumnsType } from 'antd/lib/table'
type IList = {
  id: number,
  title: string
}

let columns:ColumnsType<IList> = useMemo(() => {
  return [
    {title: 'ID', dataIndex: 'id'},
    {title: '任务名称', dataIndex: 'title'}
  ]
})
```

- table中`columns`- `ColumnProps`接口

```ts
import { Table, ColumnProps } from 'antd';

ChatGPT
Error analyzing
Error analyzing
It seems that there is a technical issue preventing me from directly reading the contents of your TypeScript file. However, I can still provide guidance on how to use ColumnProps in a TypeScript file with Ant Design's Table component, based on standard practices.

When using ColumnProps in a TypeScript file with Ant Design, the general approach is as follows:

Define the Data Structure: If you haven't already, define the data structure for the rows in your table. This is typically done using TypeScript interfaces or types.

Create Columns Definition: Define your columns using the ColumnProps type. You'll create an array of objects, each representing a column in your table.

Configure Each Column: For each column, you'll specify various properties such as title, dataIndex, key, and any other properties relevant to your table's functionality (like sorter, filters, etc.).

Use the Columns in the Table Component: Finally, you pass your columns array to the Table component's columns prop.

Here's an example to illustrate this:

typescript
Copy code
import React from 'react';
import { Table, ColumnProps } from 'antd';

// Define the data type for your rows
interface RowData {
  key: string;
  name: string;
  age: number;
  address: string;
}

// Define your columns
const columns: ColumnProps<RowData>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    // You can add additional properties like sorter, render, etc.
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
```

- table中 `pagination` - `TablePaginationConfig`接口

```ts
import { TablePaginationConfig } from 'antd/es/table';
const handleTableChange = (pagination:TablePaginationConfig, filters, sorter) => {
  const {pageSize, current} = pagination;
  setQueryParams({})
  apiFetch({limit:pageSize, page: current})
};
```