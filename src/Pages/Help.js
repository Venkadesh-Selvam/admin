import React from 'react'
import { Table } from 'antd';
const columns = [
    {
      title: 'Admin Name',
      dataIndex: 'name',
    },
    
    {
      title: 'Office Address',
      dataIndex: 'office',
    },
    
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      name: `FitPeo Admin ${i}`,
      office: `FitPeo Office : ${i}`,
    });
  }

const Help = () => {
  return (
    <div>
      <h3 className="mb-4 title">Contact Us</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Help;
