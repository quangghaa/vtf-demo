import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import './style/app.css';
import Dashboard from './page/Dashboard';
import SearchOptions from './page/SearchOptions';
import NarrowDownSearch from './page/NarrowDownSearch';
import SCV from './page/SCV';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';

import { Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import DocLibrary from './page/DocLibrary';
import UploadDoc from './page/UploadDoc';
import DetailDoc from './page/DetailDoc';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  
  return (
    <Router>
    <div className="App">
      <Layout>
        <Header className="header">
          <div className='flex-row'>
            <div>LOGO</div>
            <div className='mg-left'>VN Trust Food</div>
          </div>
          <div>
            <SearchOutlined />
            <UserOutlined className='mg-left'/>
          </div>
        </Header>
        <Layout>
          <Sider width={256} className="bg-white">
          <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key="sub1" icon={<MailOutlined />} title="Trace">
                <Menu.Item key="1">
                  <Link to="/dashboard">Dashboard</Link>  
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/product-entry">Product entry</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/narrowing-down">Narrowing down search</Link>
                </Menu.Item>
            </SubMenu>
            <Menu.Item icon={<MailOutlined />} key="4">
              <Link to="/documents">Document</Link>
            </Menu.Item>
            <Menu.Item icon={<MailOutlined />} key="5">Consumer</Menu.Item>
          </Menu>
          </Sider>
          <Layout className='custom-layout'>
            <Content className="bg-lightpink">
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/product-entry" element={<SearchOptions/>} />
                <Route path="/narrowing-down" element={<NarrowDownSearch/>} />
                <Route path="/trace" element={<SCV/>} />
                <Route path="/documents" element={<DocLibrary/>} />
                <Route path="/upload-document" element={<UploadDoc/>} />
                <Route path="/documents/:id" element={<DetailDoc/>} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
    </Router>
  );
}


export default App;
