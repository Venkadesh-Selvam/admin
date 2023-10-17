import React from 'react';
import { RiExchangeDollarFill } from 'react-icons/ri';
import { BiSolidFoodMenu, BiSearch } from 'react-icons/bi';
import { GiTakeMyMoney } from 'react-icons/gi';
import { RiShoppingBagLine } from 'react-icons/ri';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { Column } from '@ant-design/plots';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
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
    name: `Product ${i}`,
    stock: `${i}`,
    sales: 32,
    price: `${i}`,
  });
}

function Dashboard() {
  const data = [
    {
      type: 'Jan',
      sales: [10,18],
    },
    {
      type: 'Feb',
      sales: [5,15],
    },
    {
      type: 'Mar',
      sales: [10,25],
    },
    {
      type: 'Apr',
      sales: [12,27],
    },
    {
      type: 'May',
      sales: [4,16],
    },
    {
      type: 'Jun',
      sales: [8,30],
    },
    {
      type: 'Jul',
      sales: [10,28],
    },
    {
      type: 'Aug',
      sales: [15,25],
    },
    {
      type: 'Sep',
      sales: [7,22],
    },
    {
      type: 'Oct',
      sales: [9,26],
    },
    {
      type: 'Nov',
      sales: [13,25],
    },
    {
      type: 'Dec',
      sales: [13,24],
    }
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: () => {
      return (
        "#191970"
      
      )
    },
    label: {
      
      position: 'middle',
      // 'top', 'bottom', 'middle',
      
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Month',
      },
      sales: {
        alias: 'Earning',
      },
    },
  };
  return (
    <div>
      <h3 className="mb-5 title">Dashboard</h3>
      <div className = 'd-flex  justify-content-between align-items-center  gap-3'>
        <div className = 'dashboardInfo'>
          <span className='circle1'>
            <span>
              <RiExchangeDollarFill className='dashIcon1'/>
            </span>
          </span>
          <span className= 'dashStatus'>
            <div className='descrip1'>Earning</div>
            <div>
              <h5>$198k</h5>
            </div>
            <div>
              <AiOutlineArrowUp className='percentGreen'/>
              <span className='percentGreen'>37.8%</span>
              <span className='month'>this month</span>
            </div>
          </span>
        </div>





        <div className = 'dashboardInfo'>
          <span>
            <span className='circle2'>
              <BiSolidFoodMenu className='dashIcon2'/>
            </span>
          </span>
          <span className= 'dashStatus'>
            <div className='descrip2'>Orders</div>
            <div>
              <h5>$2.4k</h5>
            </div>
            <div>
              <AiOutlineArrowDown className='percentRed'/>
              <span className='percentRed'>2%</span>
              <span className='month'>this month</span>
            </div>
          </span>
        </div>
        





        <div className = 'dashboardInfo'>
          <span className='circle3'>
            <span>
              <GiTakeMyMoney className='dashIcon3'/>
            </span>
          </span>
          <span className= 'dashStatus'>
            <div className='descrip2'>Balance</div>
            <div>
              <h5>$2.4k</h5>
            </div>
            <div>
              <AiOutlineArrowDown className='percentRed'/>
              <span className='percentRed'>2%</span>
              <span className='month'>this month</span>
            </div>
          </span>
        </div>
        





        <div className = 'dashboardInfo'>
          <span className='circle4'>
            <span>
              <RiShoppingBagLine  className='dashIcon4'/>
            </span>
          </span>
          <span className= 'dashStatus'>
            <div className='descrip1'>Total Sales</div>
            <div>
              <h5>$89k</h5>
            </div>
            <div>
              <AiOutlineArrowUp className='percentGreen'/>
              <span className='percentGreen'>11%</span>
              <span className='month'>this week</span>
            </div>
          </span>
        </div>
        
        
        
      </div>
      <div className="mt-4">
        <h3 className="mb-5 title">Overview</h3>
        <div> 
          <Column {...config} />
        </div>
        <div className="mt-4">
          <h3 className="mb-5 title">Product Sell</h3>
          <Link>
          <button className='bg-white border-0'><BiSearch /></button>
          <input className='border-0'></input></Link>
          <div>
          <Table columns={columns} dataSource={data1} />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard;
