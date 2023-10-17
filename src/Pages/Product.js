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
  for (let i = 0; i < 5; i++) {
    data1.push({
      name: `Item ${i}`,
      stock: `${i}`,
      sales: 32,
      price: `${i}`,
    });
  }

const Product = () => {
  return (
    <div>
      <h3 className="mb-4 title">Product List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Product;
