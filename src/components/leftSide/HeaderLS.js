import React from 'react'
import {  Space, Typography } from 'antd';
import {  SettingOutlined } from '@ant-design/icons';
import ModalForm from './ModalForm';

const { Title } = Typography;

const HeaderLS = () => {
  return (
    <div className='headerLS'>
        <Space>
            <div>
                <Title level={4}>Messages</Title>
                <p>show messages</p>
            </div>
        </Space>

        <div style={{position: 'absolute', display: 'flex', top: 10, right: 10}}>
            <ModalForm/>
            <SettingOutlined />
        </div>
    </div>
  )
}

export default HeaderLS