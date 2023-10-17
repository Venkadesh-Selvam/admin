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
      name: `Venkadesh ${i}`,
      stock: `${i}`,
      sales: `35`,
      price: `Chennai : ${i}`,
    });
  }

const Income = () => {
  return (
    <div>
      <h3 className="mb-4 title">Income Statistics</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Income;
