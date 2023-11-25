
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

- `useRef` 一般在组件中使用

```ts
// 定义接口
type ILogmodalRef = {
  changeOpen: (newVal:boolean, record:ICollectionList) => void;
}
// 定义变量
const logModalRef = useRef<ILogmodalRef>(null);
//定义方法
const lookLog = useCallback((record: ICollectionList) => {
  logModalRef.current?.changeOpen(true, {opraType: 'look',...record});
}, [])
// 在组件中使用
// <LogModal ref={logModalRef}/>

```
