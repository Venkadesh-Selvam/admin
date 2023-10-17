import React, { useState } from 'react';
import { MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
import { CgKeyhole } from 'react-icons/cg';
import { TbBrandProducthunt , TbSettings2 } from 'react-icons/tb';
import { PiUsersThreeBold, PiHandWavingFill } from 'react-icons/pi';
import { GiWallet } from 'react-icons/gi';
import { BiSolidOffer, BiSearch } from 'react-icons/bi';
import { MdHelpCenter } from 'react-icons/md';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom'
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate=useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
      
        <div className="logo">
          <h2 className='text-white fs-5 text-center py-3 mb-1'>
          <span>
          <TbSettings2 className='sm-logo'/>
          <span className='lg-logo'>
          <TbSettings2 className ='fs-5 '/>  Dashboard
          
          </span> 
           
          </span>
         
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick = {({key}) =>{
            if (key==="Signout"){

            }
            else{
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <CgKeyhole />,
              label: 'Dashboard',
            },
            {
              key: 'product',
              icon: <TbBrandProducthunt />,
              label: 'Product',
              children:[{
                key: 'AddProducts',
              icon: <BiSolidOffer />,
              label: 'AddProducts',
              }]
              
            },
            {
              key: 'Customers',
              icon: <PiUsersThreeBold/>,
              label: 'Customers',
              
            },
            {
              key: 'Income',
              icon: <GiWallet/>,
              label: 'Income',
            },
            {
              key: 'Promote',
              icon: <BiSolidOffer />,
              label: 'Promote',
              children:[{
                key: 'AddBlog',
              icon: <BiSolidOffer />,
              label: 'AddBlog',
              }]
              
            },
            {
              key: 'Help',
              icon: <MdHelpCenter />,
              label: 'Help',
              
            },
          ]}
        />
      </Sider>
      <Layout className = "side-layout">
        <Header
        className='d-flex justify-content-between ps-1 pe-3 bg-transparent'
          style={{
            padding: 0,
            background: colorBgContainer 
          }}
        >
          {
          React.createElement(collapsed?MenuUnfoldOutlined:MenuFoldOutlined,
            {
              className:'trigger',
              onClick : ()=> setCollapsed(!collapsed),
            })
          }
          <span>
            <span className='hello'>Hello Shahrukh <PiHandWavingFill className='hand'/>,</span>
            
          </span>
          
          <span className='searchBar'>
          <span className='fs-6 bg-white'>
            <BiSearch /></span>
            <input 
              className='search'
              placeholder="Search Here ..."
              type="text" />
          </span>
          <Link
          to='/login'
          type='submit'
          style ={{'color':'#00008B',
              'text-decoration': 'none',
              'text-align':'center',
              'align-items': 'center',
              'height': '20px',
              }}
          >
            Login
          </Link>
         
        
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          
            <Outlet />  
          
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
