import React from 'react';
import './Profile.css'
import { Menu, Dropdown, Button, Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import logo4 from '../Images/LOGO (1).png'
import logo6 from '../Images/man.png'
import Containers from './Containers';
import {UserOutlined} from '@ant-design/icons'
import {QuestionCircleOutlined} from '@ant-design/icons'
import {LogoutOutlined } from '@ant-design/icons'


const { Header } = Layout;

const Profile = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1"><UserOutlined/> Account</Menu.Item>
      <Menu.Item key="2"><QuestionCircleOutlined /> Help</Menu.Item>
      <Menu.Item key="3"><LogoutOutlined /> Logout</Menu.Item>
    </Menu>
  );

  return (
    <div>

    <div className='producerNavbar'>
    <div><img src={logo4} alt='logo' className='logo'/></div>
    <div className='next'><p className='s'>Sign in</p>
   <Dropdown overlay={menu} trigger={['click']} >
        <a className="ant-dropdown-link icon" onClick={e => e.preventDefault()}>
        
          <img src={logo6} alt='profile' className='profile'/>
          <div className='drop2'>
          <DownOutlined className='drop'/>
          </div>
        </a>
      </Dropdown>

      </div>
</div>
<Containers/>
</div>
  )}

export default Profile;