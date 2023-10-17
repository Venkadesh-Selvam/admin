import React from 'react'
import { Table } from 'antd';
const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Total Sales',
      dataIndex: 'sales',
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      name: i,
      stock: `${i}`,
      sales: 32,
      price: `${i}`,
    });
  }

const Promote = () => {
  return (
    <div>
      <h3 className="mb-4 title">Blog List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Promote;
