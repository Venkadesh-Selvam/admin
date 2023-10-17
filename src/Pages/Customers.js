import React from 'react'
import { Table } from 'antd';
const columns = [
    {
      title: 'Customer Name',
      dataIndex: 'name',
    },
    {
      title: 'Customer Id',
      dataIndex: 'id',
    },
    {
      title: 'Customer Address',
      dataIndex: 'address',
    },
    {
      title: 'Total Purchase',
      dataIndex: 'purchase',
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      name: `Venkadesh ${i}`,
      id: `${i}`,
      address: `Chennai : ${i}`,
      purchase: `${i}`,
    });
  }

const Customers = () => {
  return (
    <div>
      <h3 className="mb-4 title">Customers List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Customers;
