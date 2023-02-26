import React from 'react'
import {  Space, Typography } from 'antd';
import ModalForm from './ModalForm';
import { AdjustmentsHorizontal, Archive } from 'tabler-icons-react';

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
            <Archive size={28} style={{marginRight:12}}/>
            <AdjustmentsHorizontal size={28} />
        </div>
    </div>
  )
}

export default HeaderLS